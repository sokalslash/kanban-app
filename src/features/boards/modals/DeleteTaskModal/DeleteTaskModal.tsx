import { colors } from '@app/styles/colors'
import { Button } from '@/components/Button/Button'
import { ModalWrapper } from '@/components'

import { Modal, ModalTitle, ModalButtons } from './DeleteTaskModal.styles'

interface DeleteTaskModalProps {
  taskId: string
  title: string
  onClose: () => void
  onDelete: () => void
}

export const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({ taskId, title, onClose, onDelete }) => {
  const deleteTask = () => {
    onDelete()
    onClose()
  }

  return (
    <ModalWrapper
      title={`Удалить задачу ${title}?`}
      titleColor={colors.red}
      closeModal={onClose}
      withDotsBtn={false}
    >
      <Modal>
        <div>
          <ModalTitle>
            Вы уверены, что хотите удалить '{title}' и все её подзадачи? Это действие невозможно будет отменить.
          </ModalTitle>
          <ModalButtons>
            <Button
              title='Отмена'
              width='200'
              size='L'
              secondary
              isDisabled={false}
              onClick={onClose}
            />
            <Button
              title='Удалить'
              width='200'
              size='L'
              destructive
              isDisabled={false}
              onClick={deleteTask}
            />
          </ModalButtons>
        </div>
      </Modal>
    </ModalWrapper>
  )
}
export default DeleteTaskModal
