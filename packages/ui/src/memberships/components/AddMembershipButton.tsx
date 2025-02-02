import React, { ReactNode } from 'react'

import { TransactionButtonWrapper } from '@/common/components/buttons/TransactionButton'
import { useTransactionStatus } from '@/common/hooks/useTransactionStatus'

import { ButtonSize } from '../../common/components/buttons'
import { useModal } from '../../common/hooks/useModal'
import { BuyMembershipModalCall } from '../modals/BuyMembershipModal'

import { MembershipActionButton } from './CurrentMember'

interface AddMembershipButtonProps {
  className?: string
  children: ReactNode
  size: ButtonSize
}

export const AddMembershipButton = ({ className, children, size }: AddMembershipButtonProps) => {
  const { showModal } = useModal()
  const { isTransactionPending } = useTransactionStatus()

  return (
    <TransactionButtonWrapper>
      <MembershipActionButton
        onClick={() => showModal<BuyMembershipModalCall>({ modal: 'BuyMembership' })}
        className={className}
        size={size}
        disabled={isTransactionPending}
      >
        {children}
      </MembershipActionButton>
    </TransactionButtonWrapper>
  )
}
