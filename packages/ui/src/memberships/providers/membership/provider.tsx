import React, { ReactNode, useCallback, useMemo, useState } from 'react'

import { useMyAccounts } from '@/accounts/hooks/useMyAccounts'
import { error } from '@/common/logger'
import { Address } from '@/common/types'

import { useGetMembersQuery } from '../../queries'
import { asMember, Member } from '../../types'

import { MembershipContext } from './context'

interface Props {
  children: ReactNode
}

export interface MyMemberships {
  members: Member[]
  hasMembers: boolean
  isLoading: boolean
  active: Member | undefined
  setActive: (member: Member) => void
  helpers: {
    getMemberIdByBoundAccountAddress: (address: Address) => Member['id'] | undefined
  }
}

const POLL_INTERVAL = 10_000

export const MembershipContextProvider = (props: Props) => {
  const [active, setActive] = useState<Member>()

  const { allAccounts } = useMyAccounts()
  const addresses = allAccounts.map((account) => account.address)

  const {
    data,
    loading,
    error: err,
  } = useGetMembersQuery({
    variables: { where: { rootAccount_in: addresses, controllerAccount_in: addresses } },
    pollInterval: POLL_INTERVAL,
  })

  if (err) {
    error(err)
  }

  const members = useMemo(() => (data?.memberships ?? []).map(asMember), [loading, JSON.stringify(data?.memberships)])

  const boundAccountsMap: { [index: Address]: Member['id'] } = useMemo(
    () =>
      members.reduce((prevMember, nextMember) => {
        const toAdd = nextMember.boundAccounts.reduce(
          (prevAddress, nextAddress) => ({
            ...prevAddress,
            [nextAddress]: nextMember.id,
          }),
          {}
        )
        return {
          ...prevMember,
          ...toAdd,
        }
      }, {}),
    [members]
  )
  const getMemberIdByBoundAccountAddress = useCallback(
    (address: Address) => boundAccountsMap[address],
    [boundAccountsMap]
  )

  const value = {
    active,
    setActive,
    members,
    hasMembers: !!members.length,
    isLoading: loading,
    helpers: {
      getMemberIdByBoundAccountAddress,
    },
  }

  return <MembershipContext.Provider value={value}>{props.children}</MembershipContext.Provider>
}
