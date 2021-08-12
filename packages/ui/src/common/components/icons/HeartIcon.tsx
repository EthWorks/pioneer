import React from 'react'

import { Icon } from './Icon'

interface HeartIconProps {
  className?: any
}

export const HeartIcon = React.memo(({ className }: HeartIconProps) => (
  <Icon
    size="16"
    viewBox="0 0 20 18"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    color="currentColor"
    className={className}
  >
    <path
      clipRule="evenodd"
      d="M8.55 16.7052L10 18L11.45 16.715L11.4895 16.6798C16.6174 12.1088 20 9.09351 20 5.3951C20 2.37384 17.58 0 14.5 0C13.325 0 12.1818 0.362356 11.2277 0.984352C10.769 1.2834 10.3539 1.64247 10 2.05014C9.64609 1.64247 9.23105 1.2834 8.77231 0.984352C7.81818 0.362356 6.67505 0 5.5 0C2.42 0 0 2.37384 0 5.3951C0 9.09995 3.39442 12.1193 8.53732 16.6939L8.55 16.7052ZM10.1212 15.2202C12.7365 12.8889 14.7428 11.0962 16.1198 9.44367C17.4753 7.81685 18 6.57942 18 5.3951C18 3.51455 16.5119 2 14.5 2C13.3513 2 12.2283 2.53419 11.5103 3.36125L10 5.10098L8.48971 3.36125C7.77172 2.53419 6.64868 2 5.5 2C3.48808 2 2 3.51455 2 5.3951C2 6.57939 2.52467 7.81673 3.87981 9.44193C5.25667 11.0932 7.2634 12.884 9.87924 15.2108L9.88214 15.2134L10.0051 15.3232L10.1192 15.222C10.1199 15.2214 10.1205 15.2208 10.1212 15.2202Z"
      fillRule="evenodd"
      fill="currentColor"
    />
  </Icon>
))