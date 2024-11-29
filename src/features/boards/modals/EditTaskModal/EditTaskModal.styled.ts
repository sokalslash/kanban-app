import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const SubTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
  color: ${colors.mediumGrey};
`
