import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const Wrapper = styled.div<{
  $isSidebarOpened: boolean
}>`
  width: 100%;
  height: 96px;
  display: flex;
  position:fixed;
  padding-left: ${props => (props.$isSidebarOpened ? '300px' : '0px')};
  top: 0;
  left: 0;
`

export const TitleButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px 0 24px;
  font-size: 24px;
  background: ${colors.white};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  cursor: pointer;
`

export default Headers
