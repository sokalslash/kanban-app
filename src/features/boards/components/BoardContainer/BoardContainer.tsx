import { useAppSelector } from '@/app/hooks'

import { Container } from './BoardContainer.styles'

import { EmptyContentType } from '../EmptyBoard/EmptyContent.types'

export const BoardContainer = ({
  isCenterPosition,
  children,
  type,
}: {
  children: React.ReactNode
  isCenterPosition?: boolean
  type?: EmptyContentType
}) => {
  const { app } = useAppSelector(state => state.app)
  return (
    <Container
      $isCenterPosition={isCenterPosition}
      $isSidebarOpened={app.isVisibleSidebar}
      type={type}
    >
      {children}
    </Container>
  )
}
