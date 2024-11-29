import { Button } from '@/components'

import { AddColumnWrapper, AddButtonContainer } from './AddColumn.styles'

export const AddColumn = () => {
  return (
    <AddColumnWrapper>
      <AddButtonContainer>
        <Button
          title='+ Новая колонка'
          isDisabled={false}
          isTransparent
        />
      </AddButtonContainer>
    </AddColumnWrapper>
  )
}
