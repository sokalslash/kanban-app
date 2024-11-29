import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const ContentWrapper = styled.div`
  display: flex;
  gap: 33px;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  color: ${colors.mediumGrey};
  font-weight: 400;
  font-size: 18px;
`
