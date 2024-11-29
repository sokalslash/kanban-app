import styled from 'styled-components'

import closeBtn from '@assets/icons/close-icon.svg'
import { colors } from '@app/styles/colors'

export const LabelContainer = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  color: ${colors.mediumGrey};
`

export const Title = styled.span<{ required: boolean }>`
  &::after {
    content: '*';
    margin-left: 3px;
    color: ${colors.red};
    display: ${props => (props.required ? 'inline' : 'none')};
  }
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 16px;
`

export const ValidationWrapper = styled.span<{ $isValid: boolean }>`
  position: relative;
  flex: 1;

  input {
    border-width: 1px;
    border-style: solid;
    border-color: ${props => (props.$isValid ? colors.silverGrey : colors.red)};
  }

  input:focus {
    border-color: ${props => (props.$isValid ? colors.mainPurple : colors.red)};
  }

  &::before {
    content: 'Заполните поле';
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 13px;
    line-height: 23px;
    color: ${colors.red};
    visibility: ${props => (props.$isValid ? 'hidden' : 'visible')};
  }
`

export const InputContainer = styled.input`
  width: 100%;
  padding: 8px 16px;
  font-size: 13px;
  line-height: 23px;
  border-radius: 4px;
  outline: none;
`

export const DeleteButton = styled.button`
  align-self: center;
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: url(${closeBtn});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`
