import { useMemo } from 'react'

import { error } from '@/common/logger'
import { getOpeningsWhere, OpeningType } from '@/working-groups/hooks/utils/queries'
import { useGetWorkingGroupOpeningsQuery } from '@/working-groups/queries'
import {
  asWorkingGroupOpening,
  WorkingGroupOpeningStatus,
  WorkingGroupOpeningStatusTypename,
} from '@/working-groups/types'

export interface UseOpeningsParams {
  groupId?: string
  type: OpeningType
}

export const getStatusWhere = (statusIn?: WorkingGroupOpeningStatus[]) => {
  if (!statusIn) {
    return
  }

  return { isTypeOf_in: statusIn.map((status) => WorkingGroupOpeningStatusTypename[status]) }
}

export const useOpenings = ({ groupId: group_eq, type }: UseOpeningsParams) => {
  const where = {
    group: { id_eq: group_eq },
    ...getOpeningsWhere(type),
  }

  const { data, loading, error: err } = useGetWorkingGroupOpeningsQuery({ variables: { where } })
  err && error(err)

  const openings = useMemo(
    () => data?.workingGroupOpenings.map((opening) => asWorkingGroupOpening(opening)) ?? [],
    [loading, data]
  )

  return {
    openings,
    isLoading: loading,
  }
}
