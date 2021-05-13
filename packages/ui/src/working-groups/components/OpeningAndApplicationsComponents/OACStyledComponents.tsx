import styled from 'styled-components'

import { ToggleButton } from '../../../common/components/buttons/Toggle'
import { Subscription } from '../../../common/components/typography/Subscription'
import { Colors, Overflow, Transitions } from '../../../common/constants'

export const OACWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 40px;
  grid-column-gap: 24px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 94px;
  padding: 16px;
  background-color: ${Colors.White};
  transition: ${Transitions.all};
`

export const ApplicationItemWrap = styled(OACWrap)`
  grid-template-columns: 1fr auto 40px 40px;
`

export const OpenedContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: ${Transitions.all};
`

export const OpenedWrapper = styled.div`
  display: grid;
  grid-row-gap: 16px;
  width: 100%;
  max-height: 100%;
  padding: 16px;
  background-color: ${Colors.Black[50]};
  overflow: hidden;
  transition: ${Transitions.all};
`

interface OpenedItemProps {
  isOpen?: boolean
}

export const OACItemContainer = styled.div<OpenedItemProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  transition: ${Transitions.all};

  ${OACWrap} {
    margin-top: ${({ isOpen }) => (isOpen ? '-94px' : '0px')};
  }
  ${OpenedContainer} {
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0px')};
  }
`

export const OACItemInfo = styled.div`
  display: grid;
  grid-template-rows: 26px 24px;
  grid-row-gap: 4px;
  width: 100%;
  max-width: 342px;
  align-items: center;
`

export const OACItemInfoTop = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 16px;
  width: fit-content;
  max-width: 100%;
`

export const OACItemSummary = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  grid-column-gap: 40px;
`

export const OACItemTitle = styled.h5`
  ${Overflow.Dots}
`

export const OpenedItemTitle = styled.h4`
  ${Overflow.Dots}
`

export const OpenItemSummaryColumn = styled.div`
  display: grid;
  grid-template-rows: 26px 24px;
  grid-row-gap: 4px;
  align-items: center;
`

export const OACSubscriptionWide = styled(Subscription)`
  min-width: 136px;
`

export const OpenedTop = styled.div`
  display: grid;
  grid-template-rows: 26px 28px;
  grid-row-gap: 8px;
  align-items: center;
`

export const OpeningToggleButton = styled(ToggleButton)`
  top: 8px;
`