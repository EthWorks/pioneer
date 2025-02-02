import BN from 'bn.js'

import { KeysOfUnion } from '@/common/types/helpers'
import { asWorkingGroupName, GroupIdName } from '@/working-groups/types'

import { asMember, Member } from '../../memberships/types'
import { ProposalWithDetailsFieldsFragment } from '../queries'

export type DetailsFragment = ProposalWithDetailsFieldsFragment['details']
type ProposalDetailsTypename = DetailsFragment['__typename']

interface BaseProposalDetails {
  type: undefined
}

type ProposalDetailsNew<Type extends string, Details> = { type: Type } & Details

export type DestinationsDetail = {
  destinations?: {
    account: string
    amount: number
  }[]
}
export type NewByteCodeIdDetail = {
  newBytecodeId?: string
}
export type GroupDetail = {
  group?: {
    id: GroupIdName
    name: string
  }
}
export type AmountDetail = {
  amount: BN
}
export type StakeAmountDetail = {
  stakeAmount: BN
}
export type UnstakingPeriodDetail = {
  unstakingPeriod: BN
}
export type RewardPerBlockDetail = {
  rewardPerBlock: BN
}
export type OpeningDescriptionDetail = {
  openingDescription?: string
}
export type MemberDetail = {
  member?: Member
}
export type GroupNameDetail = {
  groupName: string
}

export type FundingRequestDetails = ProposalDetailsNew<'fundingRequest', DestinationsDetail>
export type CreateLeadOpeningDetails = ProposalDetailsNew<
  'createWorkingGroupLeadOpening',
  StakeAmountDetail & UnstakingPeriodDetail & RewardPerBlockDetail & OpeningDescriptionDetail & GroupDetail
>
export type DecreaseLeadStakeDetails = ProposalDetailsNew<
  'decreaseWorkingGroupLeadStake',
  MemberDetail & GroupNameDetail & AmountDetail
>
export type SlashLeadDetails = ProposalDetailsNew<
  'slashWorkingGroupLead',
  MemberDetail & GroupNameDetail & AmountDetail
>
export type RuntimeUpgradeDetails = ProposalDetailsNew<'runtimeUpgrade', NewByteCodeIdDetail>

export type ProposalDetails =
  | BaseProposalDetails
  | FundingRequestDetails
  | CreateLeadOpeningDetails
  | DecreaseLeadStakeDetails
  | SlashLeadDetails
  | RuntimeUpgradeDetails

export type ProposalDetailsKeys = KeysOfUnion<ProposalDetails>

const asFundingRequest: DetailsCast<'FundingRequestProposalDetails'> = (fragment): FundingRequestDetails => {
  return {
    type: 'fundingRequest',
    destinations: fragment.destinationsList?.destinations.map((d) => ({ account: d.account, amount: d.amount })),
  }
}

const asCreateLeadOpening: DetailsCast<'CreateWorkingGroupLeadOpeningProposalDetails'> = (
  fragment
): CreateLeadOpeningDetails => {
  const group = fragment.group
    ? {
        id: fragment.group.id as GroupIdName,
        name: asWorkingGroupName(fragment.group.name),
      }
    : undefined
  return {
    type: 'createWorkingGroupLeadOpening',
    group,
    stakeAmount: new BN(fragment.stakeAmount),
    unstakingPeriod: new BN(fragment.unstakingPeriod),
    rewardPerBlock: new BN(fragment.rewardPerBlock),
    openingDescription: fragment.metadata?.description ?? undefined,
  }
}

const asLeadStakeDetails = (
  fragment: ProposalWithDetailsFieldsFragment['details'] &
    (
      | { __typename: 'DecreaseWorkingGroupLeadStakeProposalDetails' }
      | { __typename: 'SlashWorkingGroupLeadProposalDetails' }
    )
) => {
  const groupName = asWorkingGroupName(fragment.lead?.group.name ?? 'Unknown')
  const member = fragment.lead ? asMember(fragment.lead.membership) : undefined
  return {
    member,
    groupName,
    amount: new BN(fragment.amount),
  }
}

const asDecreaseLeadStake: DetailsCast<'DecreaseWorkingGroupLeadStakeProposalDetails'> = (
  fragment
): DecreaseLeadStakeDetails => ({
  type: 'decreaseWorkingGroupLeadStake',
  ...asLeadStakeDetails(fragment),
})

const asSlashLead: DetailsCast<'SlashWorkingGroupLeadProposalDetails'> = (fragment): SlashLeadDetails => ({
  type: 'slashWorkingGroupLead',
  ...asLeadStakeDetails(fragment),
})

const asRuntimeUpgrade: DetailsCast<'RuntimeUpgradeProposalDetails'> = (fragment): RuntimeUpgradeDetails => ({
  type: 'runtimeUpgrade',
  newBytecodeId: fragment.newRuntimeBytecode?.id,
})

interface DetailsCast<T extends ProposalDetailsTypename> {
  (fragment: DetailsFragment & { __typename: T }): ProposalDetails
}

const detailsCasts: Partial<Record<ProposalDetailsTypename, DetailsCast<any>>> = {
  FundingRequestProposalDetails: asFundingRequest,
  CreateWorkingGroupLeadOpeningProposalDetails: asCreateLeadOpening,
  DecreaseWorkingGroupLeadStakeProposalDetails: asDecreaseLeadStake,
  SlashWorkingGroupLeadProposalDetails: asSlashLead,
  RuntimeUpgradeProposalDetails: asRuntimeUpgrade,
}

export const asProposalDetails = (fragment: DetailsFragment): ProposalDetails => {
  const type = fragment.__typename as ProposalDetailsTypename
  const result = detailsCasts[type]?.(fragment)
  return result ?? { type: undefined }
}
