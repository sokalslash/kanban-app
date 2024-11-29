import styled from 'styled-components'

import { colors } from '@app/styles/colors'

interface StyledButtonProps {
  $buttonType: 'edit' | 'delete'
}
export const PopupContainer = styled.div`
  position: absolute;
  width: 192px;
  height: 94px;
  margin: 16px;
  border-radius: 8px;
  padding: 16px;
  transform: translate(-100%, 15%);
  background-color: ${colors.white};
  box-shadow: 0px 10px 20px 0px ${colors.lightBlue};
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 13px;
`

export const StyledButton = styled.div<StyledButtonProps>`
  height: 23px;
  cursor: pointer;
  color: ${props => (props.$buttonType === 'edit' ? colors.mediumGrey : colors.red)};
`
