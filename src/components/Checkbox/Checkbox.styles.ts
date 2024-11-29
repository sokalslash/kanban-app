import styled from 'styled-components'

import { colors } from '@app/styles/colors'
import checkMark from '@assets/icons/check-mark.svg'

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })<{ checked: boolean }>`
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 16px 0 0;
  border: 1px solid ${colors.grey};
  border-radius: 2px;
  cursor: pointer;
  background-color: ${colors.white};
  transition: 150ms;

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    overflow: hidden;
    border-radius: 2px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('${checkMark}');
    background-color: ${colors.mainPurple};
    opacity: ${props => (props.checked ? '1' : '0')};
    transition: 150ms;
  }
`

export const Label = styled.label<{ checked: boolean }>`
  display: flex;
  align-items: center;
  width: 350px;
  height: 40px;
  padding: 12px;
  font-size: 12px;
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
  color: ${props => (props.checked ? colors.mediumGrey : colors.black)};
  background-color: ${colors.lightGrey};
  border-radius: 4px;
  transition: 150ms;

  &:hover {
    background-color: ${colors.secondaryPurpleHover};
  }
`
