import React from 'react'

import { TextInlineBig, TextMedium, TokenValue } from '@/common/components/typography'
import { Subscription } from '@/common/components/typography/Subscription'
import { relativeTime } from '@/common/model/relativeTime'
import {
  OACItemInfo,
  OACItemInfoTop,
  OACItemSummary,
  OACItemTitle,
  OACSubscriptionWide,
  OACWrap,
  OpenItemSummaryColumn,
} from '@/working-groups/components/OpeningAndApplicationsComponents/OACStyledComponents'
import { UpcomingWorkingGroupOpening } from '@/working-groups/types'

export type UpcomingProps = {
  opening: UpcomingWorkingGroupOpening
}
export const UpcomingOpeningListItem = ({ opening }: UpcomingProps) => (
  <OACWrap>
    <OACItemInfo>
      <OACItemInfoTop>
        <Subscription>ID: {opening.id}</Subscription>
        <Subscription>Starts {relativeTime(opening.expectedStart)}</Subscription>
      </OACItemInfoTop>
      <OACItemTitle>{opening.title}</OACItemTitle>
    </OACItemInfo>
    <OACItemSummary>
      <OpenItemSummaryColumn>
        <TextInlineBig>
          <TokenValue value={opening.reward.value} />
        </TextInlineBig>
        <OACSubscriptionWide>Reward per 3600 blocks.</OACSubscriptionWide>
      </OpenItemSummaryColumn>
      <OpenItemSummaryColumn>.</OpenItemSummaryColumn>
      <OpenItemSummaryColumn>
        <TextMedium>{opening.hiringLimit}</TextMedium>
        <Subscription>Hiring</Subscription>
      </OpenItemSummaryColumn>
    </OACItemSummary>
  </OACWrap>
)