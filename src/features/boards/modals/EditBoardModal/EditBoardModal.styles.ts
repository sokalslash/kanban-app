import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 20px 0;
`

export const Title = styled.span`
  position: relative;
  margin-bottom: 10px;
  font-size: 12px;
  color: ${colors.mediumGrey};

  &::after {
    content: '*';
    margin-left: 3px;
    color: ${colors.red};
  }
`

export const AddColumnButton = styled.button`
  margin: 0 0 24px 0;
  padding: 14px;
  background-color: rgba(99, 95, 199, 0.1);
  color: ${colors.mainPurple};
  border: none;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background: rgba(99, 95, 199, 0.25);
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  button {
    margin-top: 5px;
  }
`
