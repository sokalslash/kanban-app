import styled from 'styled-components'

import { colors } from '@app/styles/colors'

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  padding: 32px;
  border-radius: 6px;
  background-color: ${colors.white};
`
export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: center;
`

export const Title = styled.h1`
  flex-grow: 1;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: ${props => props.color ?? '#000112'};
`
