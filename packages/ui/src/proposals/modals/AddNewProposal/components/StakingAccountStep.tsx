import BN from 'bn.js'
import React from 'react'

import { SelectAccount } from '@/accounts/components/SelectAccount'
import { filterByRequiredStake } from '@/accounts/components/SelectAccount/helpers'
import { useMyBalances } from '@/accounts/hooks/useMyBalances'
import { useStakingAccountStatus } from '@/accounts/hooks/useStakingAccountStatus'
import { Account } from '@/accounts/types'
import { InputComponent } from '@/common/components/forms'
import { Row } from '@/common/components/Modal'
import { RowGapBlock } from '@/common/components/page/PageContent'
import { TextMedium, ValueInJoys } from '@/common/components/typography'
import { formatTokenValue } from '@/common/model/formatters'
import { Member } from '@/memberships/types'

interface StakingAccountStepProps {
  requiredStake: BN
  account?: Account
  setAccount: (account: Account) => void
  member: Member
}

export const StakingAccountStep = ({
  requiredStake,
  account: chosenAccount,
  setAccount,
  member,
}: StakingAccountStepProps) => {
  const balances = useMyBalances()
  const status = useStakingAccountStatus(chosenAccount?.address, member.id)

  return (
    <RowGapBlock gap={24}>
      <Row>
        <RowGapBlock gap={8}>
          <h4>General parameters</h4>
          <TextMedium lighter>Staking account</TextMedium>
        </RowGapBlock>
      </Row>
      <Row>
        <RowGapBlock gap={20}>
          <RowGapBlock gap={8}>
            <TextMedium>
              You must stake <ValueInJoys>{formatTokenValue(requiredStake)}</ValueInJoys> to create this proposal. This
              stake will be returned to you when the lorem ipsum dolor sit amet.
            </TextMedium>
          </RowGapBlock>
          <InputComponent
            label="Select account for Staking"
            required
            inputSize="l"
            validation={status === 'other' ? 'invalid' : undefined}
            message={status === 'other' ? 'This account is bound to the another member' : undefined}
          >
            <SelectAccount
              onChange={(account) => setAccount(account)}
              selected={chosenAccount}
              minBalance={requiredStake}
              filter={(account) => filterByRequiredStake(requiredStake, 'Proposals', balances[account.address])}
            />
          </InputComponent>
        </RowGapBlock>
      </Row>
    </RowGapBlock>
  )
}
