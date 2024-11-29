import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '@app/styles/colors'
import eyeHideIcon from '@assets/icons/eye-hide-icon.svg'
import Icon from '@assets/icons/board-icon.svg?react'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 300px;
  background-color: ${colors.white};
  border-right: 1px solid ${colors.light};
`

export const LogoLink = styled(Link)`
  display: block;
  margin-top: 32px;
  margin-left: 34px;
  margin-bottom: 55px;

  &:hover {
    cursor: pointer;
  }
`

export const QuantityBoards = styled.p`
  margin-left: 32px;
  margin-bottom: 19px;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: ${colors.mediumGrey};
`

export const HideSidebarButton = styled.button.attrs({ type: 'button' })`
  width: 138px;
  height: 36px;
  padding: 8px;
  margin-left: 31px;
  margin-bottom: 47px;
  background-color: transparent;
  background-image: url('${eyeHideIcon}');
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`

export const NewBoardButton = styled.button`
  padding: 14px 15px 14px 32px;
  font-size: 15px;
  line-height: 19px;
  text-align: start;
  color: ${colors.mainPurple};
  background-color: transparent;

  &:hover {
    color: ${colors.white};
    border-radius: 0px 100px 100px 0px;
    background-color: ${colors.mainPurple};
    cursor: pointer;
    fill: ${colors.white};
  }

  &:hover svg {
    fill: ${colors.white};
  }
`
export const IconBoard = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-right: 16px;
  vertical-align: baseline;
  fill: ${colors.mainPurple};
`
