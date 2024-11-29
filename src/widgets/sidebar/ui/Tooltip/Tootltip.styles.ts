import styled, { keyframes } from 'styled-components'

import { colors } from '@app/styles/colors'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const TooltipContainer = styled.div`
  position: absolute;
  margin-top: 10px;
  margin-left: 25px;
  padding: 10px 15px;
  width: 250px;
  min-height: 50px;
  background-color: ${colors.lightGrey};
  color: ${colors.silverGrey};
  border-radius: 15px;
  opacity: 0;
  z-index: 1;
  &.show {
    opacity: 1;
    animation: ${fadeIn} 1s ease-in-out;
  }
`
