import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const TaskDetailWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Description = styled.div`
  color: ${colors.mediumGrey};
  font-size: 13px;
  line-height: 23px;
`

export const ContainerSubtasks = styled.div`
  color: ${colors.mediumGrey};
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Subtasks = styled.div`
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 15px;
  gap: 8px;
`
export const Status = styled.div`
  color: ${colors.mediumGrey};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 15px;
  gap: 8px;
`
export const Popup = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 192px;
  top: -10px;
  right: -100px;
  padding: 16px;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 10px 20px 0 ${colors.shadow};
  z-index: 101;
`
export const ButtonInPopup = styled.button<{ $isWarning: boolean }>`
  color: ${props => (props.$isWarning ? colors.red : colors.mediumGrey)};
  line-height: 23px;
  text-align: start;
  cursor: pointer;
`
