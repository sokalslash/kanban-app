import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const Overlay = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
`

export const Modal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-right: 16px;
`

export const ModalTitle = styled.p`
  margin-bottom: 27px;
  font-size: 13px;
  line-height: 1.8;
  font-weight: 400;
  color: ${colors.mediumGrey};
`
