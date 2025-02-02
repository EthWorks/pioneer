import { asBlock, Block } from '@/common/types'
import { asMember, Member } from '@/memberships/types'
import { typenameToProposalDetails } from '@/proposals/model/proposalDetails'
import { isProposalActive, typenameToProposalStatus } from '@/proposals/model/proposalStatus'
import { ProposalFieldsFragment, VoteWithDetailsFieldsFragment } from '@/proposals/queries'
import { asProposalVote, ProposalVote } from '@/proposals/types/ProposalWithDetails'

export type ProposalStatus =
  | 'deciding'
  | 'gracing'
  | 'dormant'
  | 'vetoed'
  | 'executed'
  | 'executionFailed'
  | 'slashed'
  | 'rejected'
  | 'expired'
  | 'cancelled'
  | 'canceledByRuntime'

export type ProposalType =
  | 'signal'
  | 'runtimeUpgrade'
  | 'fundingRequest'
  | 'setMaxValidatorCount'
  | 'createWorkingGroupLeadOpening'
  | 'fillWorkingGroupLeadOpening'
  | 'updateWorkingGroupBudget'
  | 'decreaseWorkingGroupLeadStake'
  | 'slashWorkingGroupLead'
  | 'setWorkingGroupLeadReward'
  | 'terminateWorkingGroupLead'
  | 'amendConstitution'
  | 'cancelWorkingGroupLeadOpening'
  | 'setMembershipPrice'
  | 'setCouncilBudgetIncrement'
  | 'setCouncilorReward'
  | 'setInitialInvitationBalance'
  | 'setInitialInvitationCount'
  | 'setMembershipLeadInvitationQuota'
  | 'setReferralCut'
  | 'createBlogPost'
  | 'editBlogPost'
  | 'lockBlogPost'
  | 'unlockBlogPost'
  | 'veto'

export interface Proposal {
  id: string
  title: string
  status: ProposalStatus
  type: ProposalType
  proposer: Member
  createdAt: string
  endedAt?: string
  councilApprovals: number
}

export const asProposal = (fields: ProposalFieldsFragment): Proposal => {
  const proposal: Proposal = {
    id: fields.id,
    title: fields.title,
    status: typenameToProposalStatus(fields.status.__typename),
    type: typenameToProposalDetails(fields.details.__typename),
    proposer: asMember(fields.creator),
    createdAt: fields.createdAt,
    councilApprovals: fields.councilApprovals,
  }

  if (!isProposalActive(proposal.status)) {
    proposal.endedAt = fields.statusSetAtTime
  }

  return proposal
}

export interface ProposalVoteWithDetails extends ProposalVote {
  block: Block
  rationale: string
  proposalId: string
}

export const asVoteWithDetails = (voteFields: VoteWithDetailsFieldsFragment): ProposalVoteWithDetails => ({
  ...asProposalVote(voteFields),
  rationale: voteFields.rationale,
  block: asBlock({
    createdAt: voteFields.createdAt,
    inBlock: voteFields.inBlock,
    network: voteFields.network,
  }),
  proposalId: voteFields.proposalId,
})
