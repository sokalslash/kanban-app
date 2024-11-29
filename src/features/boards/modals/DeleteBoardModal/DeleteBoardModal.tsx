import { Button, ModalWrapper } from '@/components'
import { colors } from '@app/styles/colors'

import { ButtonContainer, DeleteBoardContainer, DeleteText } from './DeleteBoardModal.styles'

import { useDeleteBoardMutation } from '../../api/boardsApiSlice'

interface IDeleteBoardModalProps {
  id: string
  name: string
}

const DeleteBoardModal = ({ id, name }: IDeleteBoardModalProps) => {
  const [deleteBoard] = useDeleteBoardMutation()
  const handleDeleteBoard = (id: string) => {
    deleteBoard(id)
  }

  return (
    <ModalWrapper
      title={`Удалить доску ${name}?`}
      titleColor={colors.red}
    >
      <DeleteBoardContainer>
        <DeleteText>
          Вы действительно уверены, что хотите удалить доску {name}? Это действие удалит все колонки и задачи и его
          невозможно будет отменить.
        </DeleteText>
        <ButtonContainer>
          <Button
            title='Отмена'
            secondary
            isDisabled={false}
            size='S'
          />
          <Button
            title='Удалить'
            destructive
            isDisabled={false}
            size='S'
            onClick={() => handleDeleteBoard(id)}
          />
        </ButtonContainer>
      </DeleteBoardContainer>
    </ModalWrapper>
  )
}
export default DeleteBoardModal
