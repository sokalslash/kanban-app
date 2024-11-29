import styled from 'styled-components'
import { motion } from 'framer-motion'

import { colors } from '@app/styles/colors'

export const TaskWrapper = styled(motion.div)`
  padding: 23px 16px;
  width: 280px;
  height: fit-content;
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(54, 78, 126, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${colors.white};
`

export const Title = styled.div`
  font-size: 15px;
  line-height: 19px;
`

export const TotalSubtasks = styled.div`
  color: ${colors.mediumGrey};
  font-size: 12px;
  line-height: 15px;
`
