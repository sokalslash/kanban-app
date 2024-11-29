import styled from 'styled-components'

import dotsIcon from '@assets/icons/dots.svg'

export const PopupButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${dotsIcon});
  cursor: pointer;
`
