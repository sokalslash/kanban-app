import styled from 'styled-components'

import { colors } from '@app/styles/colors'
import sunIcon from '@assets/icons/sun-icon.svg'
import moonIcon from '@assets/icons/moon-icon.svg'

export const TogglerContainer = styled.div<{
  $marginTop: string
  $marginRight: string
  $marginBottom: string
  $marginLeft: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 251px;
  height: 48px;
  margin-top: ${prop => `${prop.$marginTop}`};
  margin-right: ${prop => `${prop.$marginRight}`};
  margin-bottom: ${prop => `${prop.$marginBottom}`};
  margin-left: ${prop => `${prop.$marginLeft}`};
  background-color: ${colors.lightGrey};
  border-radius: 6px;

  &::before {
    content: '';
    display: flex;
    width: 18px;
    height: 18px;
    align-items: center;
    justify-content: center;
    background-image: url('${sunIcon}');
    background-repeat: no-repeat;
  }

  &::after {
    content: '';
    display: flex;
    width: 18px;
    height: 18px;
    align-items: center;
    justify-content: center;
    background-image: url('${moonIcon}');
    background-repeat: no-repeat;
  }
`

export const TogglerLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
`

export const Input = styled.input.attrs({ type: 'checkbox' })`
  height: 0;
  width: 0;
  opacity: 0;

  &:checked + span::before {
    left: auto;
    right: 3px;
  }
`

export const Toggler = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 34px;
  background-color: ${colors.mainPurple};

  &::before {
    content: '';
    position: absolute;
    cursor: pointer;
    left: 3px;
    bottom: 3px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${colors.white};
  }
`
