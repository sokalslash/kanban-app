import { motion } from 'framer-motion'
import styled from 'styled-components'

import { colors } from '@app/styles/colors'
import eye from '@assets/icons/eye.svg'

export const Container = styled.div`
  position: relative;
`

export const ContainerMotion = styled(motion.div)`
  position: absolute;
`

export const Button = styled(motion.button)`
  bottom: 32px;
  position: absolute;
  width: 56px;
  height: 48px;
  background-color: ${colors.mainPurple};
  border-bottom-right-radius: 100%;
  border-top-right-radius: 100%;
  background-image: url('${eye}');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`
