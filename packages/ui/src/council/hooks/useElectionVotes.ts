import BN from 'bn.js'
import { useMemo } from 'react'

import { useMyAccounts } from '@/accounts/hooks/useMyAccounts'
import { BN_ZERO } from '@/common/constants'

import { useGetCouncilVotesQuery } from '../queries'
import { asVote, ElectionCandidate, Vote } from '../types'
import { Election } from '../types/Election'

import { MyCastVote, VotingAttempt } from './useCommitment'
import { useStoredCastVotes } from './useStoredCastVotes'

interface CandidateStats {
  candidate: ElectionCandidate
  votesNumber: number
  totalStake: BN
  ownStake: BN
  myVotes: MyCastVote[]
}

export const useElectionVotes = (election: Election) => {
  const { allAccounts } = useMyAccounts()
  const { data, loading } = useGetCouncilVotesQuery({
    variables: { where: { electionRound: { cycleId_eq: election.cycleId } } },
  })
  const myVotingAttempts = useStoredCastVotes(election.cycleId)

  const electionVotes = useMemo(() => data?.castVotes.map(asVote), [data?.castVotes.length])

  const votesPerCandidate = useMemo(() => {
    const candidateStats: Record<string, CandidateStats> = {}
    election.candidates.forEach(
      (candidate) =>
        (candidateStats[candidate.member.id] = {
          candidate,
          votesNumber: 0,
          totalStake: BN_ZERO,
          ownStake: BN_ZERO,
          myVotes: getMyVotesForCandidate(myVotingAttempts, electionVotes, candidate),
        })
    )
    electionVotes?.forEach((vote) => {
      const candidate = vote.voteFor && candidateStats[vote.voteFor.id]
      if (candidate) {
        candidate.votesNumber += 1
        candidate.totalStake = candidate.totalStake.add(vote.stake)
        if (allAccounts.find((account) => account.address === vote.castBy)) {
          candidate.ownStake = candidate.ownStake.add(vote.stake)
        }
      }
    })
    return Object.values(candidateStats).sort((a, b) => b.totalStake.sub(a.totalStake).toNumber())
  }, [electionVotes?.length, myVotingAttempts?.length])

  const sumOfStakes = useMemo(() => electionVotes?.reduce((acc, vote) => acc.add(vote.stake), BN_ZERO), [electionVotes])

  return {
    votesPerCandidate,
    sumOfStakes,
    isLoading: loading,
  }
}

const getMyVotesForCandidate = (
  votingAttempts: VotingAttempt[] | undefined,
  electionSubmittedVotes: Vote[] | undefined,
  candidate: ElectionCandidate
) =>
  votingAttempts
    ?.filter((myVote) => myVote.optionId === candidate.member.id)
    .map((myVote) => ({
      ...myVote,
      isRevealed: !!electionSubmittedVotes?.find((vote) => vote.id === myVote.voteId)?.voteFor,
    })) ?? []
