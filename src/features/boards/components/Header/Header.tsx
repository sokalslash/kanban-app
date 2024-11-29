import { useParams } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'
import { useModal } from '@/hooks/useModal'
import { Button, DotsButton } from '@components'

import { Wrapper, ButtonContainer, TitleButtonContainer } from './Header.styles'

import BoardPopup from '../BoardPopup/BoardPopup'
import { AddTaskModal } from '../../modals/AddTaskModal/AddTaskModal'
import { IBoardsApiResponse } from '../../api/boardsApiSlice.types'
import { useGetBoardByIdQuery } from '../../api/boardsApiSlice'

interface IHeaderProps {
  boardData: IBoardsApiResponse
}

export const Header = ({ boardData }: IHeaderProps) => {
  const { modalIsOpen, openModal, closeModal } = useModal({})
  const { id } = useParams()
  const { refetch } = useGetBoardByIdQuery(id ?? '')
  const {
    modalIsOpen: addTaskModalIsOpen,
    openModal: openAddTaskModal,
    closeModal: closeAddTaskModal,
  } = useModal({ onClose: refetch })

  const { app } = useAppSelector(state => state.app)

  return (
    <Wrapper $isSidebarOpened={app.isVisibleSidebar}>
      {addTaskModalIsOpen && (
        <AddTaskModal
          boardData={boardData}
          closeModal={closeAddTaskModal}
        />
      )}
      <TitleButtonContainer>
        <div>{boardData.title}</div>
        <ButtonContainer>
          <Button
            title='Добавить задачу'
            type='submit'
            isDisabled={false}
            onClick={openAddTaskModal}
          />
          <div style={{ position: 'relative' }}>
            <DotsButton onClick={modalIsOpen ? closeModal : openModal} />
            {modalIsOpen && <BoardPopup onClose={closeModal} />}
          </div>
        </ButtonContainer>
      </TitleButtonContainer>
    </Wrapper>
  )
}
