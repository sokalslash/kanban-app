import styled, { css } from 'styled-components'

import { colors } from '@app/styles/colors'

export const ButtonContainer = styled.button<{
  $size: 'S' | 'L'
  $secondary: boolean
  $destructive: boolean
  $isTransparent: boolean
  $marginBottom?: string
  width?: string
  disabled?: boolean
}>`
  padding: 14px;
  background-color: ${colors.mainPurple};
  color: ${colors.white};
  border-radius: ${props => (props.$size === 'S' ? '20px' : '24px')};
  cursor: pointer;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  width: ${props => (props.width ? props.width + 'px' : '100%')};
  ${props =>
    props.$destructive &&
    css`
      background-color: ${colors.red};
      &:hover {
        opacity: 0.7;
      }
    `}
  ${props =>
    props.$secondary &&
    css`
      background-color: ${colors.secondaryPurpleLight};
      color: ${colors.mainPurple};
      &:hover {
        background-color: ${colors.secondaryPurpleHover};
        color: ${colors.mainPurple};
      }
    `}
    ${props =>
    props.$isTransparent &&
    css`
      background-color: transparent;
      color: ${colors.mediumGrey};
      font-size: 24px;
    `}
  margin-bottom: ${props => props.$marginBottom}px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`
