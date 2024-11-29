import styled, { css } from 'styled-components'

import { colors } from '@app/styles/colors'

import { EmptyContentType } from '../EmptyBoard/EmptyContent.types'

export const Container = styled.section<{
  $isSidebarOpened: boolean
  $isCenterPosition?: boolean
  type?: EmptyContentType
}>`
  background-color: ${colors.lightGrey};
  width: 100%;
  height: ${props => (props.type === 'emptyProject' ? '100vh' : 'calc(100vh - 96px)')};
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-top: 96px;
  padding-left: ${props => (props.$isSidebarOpened ? '320px' : '20px')};
  padding-right: 24px;
  padding-bottom: 50px;
  transition: padding-left 0.7s ease-out;

  ${props =>
    props.$isCenterPosition &&
    css`
      align-items: center;
      justify-content: center;
    `}
`
