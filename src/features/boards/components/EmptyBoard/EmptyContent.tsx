import { Button } from '@/components'

import { ContentWrapper, Title } from './EmptyContent.styles'
import { EmptyBoards, EmptyContentType } from './EmptyContent.types'

import { BoardContainer } from '../BoardContainer/BoardContainer'

interface IEmptyContentProps {
  type: EmptyContentType
}

const EmptyContent = ({ type }: IEmptyContentProps) => {
  return (
    <BoardContainer
      isCenterPosition
      type={type}
    >
      <ContentWrapper>
        <Title>{EmptyBoards[type].boardTitle}</Title>
        <Button
          width='245'
          title={EmptyBoards[type].buttonTitle}
          type='button'
          isDisabled={false}
          size='L'
        />
      </ContentWrapper>
    </BoardContainer>
  )
}

export default EmptyContent
