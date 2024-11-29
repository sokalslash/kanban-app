import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${colors.lightGrey};
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 115px;
  width: 416px;
  gap: 10px;
`
export const ContainerLinks = styled.div`
  display: flex;
  gap: 12px;
`

export const ToggleButton = styled.button<{ $isActive: boolean }>`
  font-size: 18px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? colors.mediumGrey : colors.black)};

  &:hover {
    opacity: 0.7;
  }
`
export const AppLogo = styled.div`
  margin-bottom: 70px;
  align-self: center;
`
