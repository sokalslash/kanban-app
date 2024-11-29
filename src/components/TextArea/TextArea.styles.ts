import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const TextAreaLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: ${colors.mediumGrey};
  gap: 10px;
`
export const TextAreaContainer = styled.textarea`
  max-width: 100%;
  min-height: 112px;
  padding: 8px 16px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  color: ${colors.mediumGrey};
  line-height: 23px;
  border-radius: 4px;
  border: 1px solid ${colors.verylightGrey};
  outline-color: ${colors.mainPurple};
`
