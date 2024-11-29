import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const ColumnWrapper = styled.div<{ $activeDrag: boolean }>`
  padding-top: 23px;
  padding-left: 4px;
  padding-right: 4px;
  width: 288px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  background-color: ${props => props.$activeDrag && colors.verylightGrey};
`
export const ColumnTitle = styled.div`
  color: ${colors.silverGrey};
`
export const Dot = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${colors.moderatelyTurquoise};
  border-radius: 50%;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
