import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const AddColumnWrapper = styled.div`
  width: 280px;
  display: flex;
  margin-top: 66px;
  justify-content: center;
  border-radius: 6px;
  align-items: center;
  background-color: ${colors.silverLight};
`

export const AddButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: ${colors.darkGrey};
`
