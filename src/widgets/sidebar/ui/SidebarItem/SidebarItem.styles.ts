import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '@app/styles/colors'
import Icon from '@assets/icons/board-icon.svg?react'

export const SidebarItemContainer = styled.li`
  color: ${colors.mediumGrey};
`

export const SidebarLink = styled(Link)`
  display: block;
  position: relative;
  width: 276px;
  padding: 14px 15px 14px 32px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  vertical-align: baseline;
  font-size: 15px;
  line-height: 19px;
  color: inherit;

  &:hover {
    color: ${colors.white};
    border-radius: 0px 100px 100px 0px;
    background-color: ${colors.mainPurple};
    cursor: pointer;
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
`
