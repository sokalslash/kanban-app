import { createPortal } from 'react-dom'

import { Logo } from '@components'
import { useGetBoardsQuery } from '@features/boards/api/boardsApiSlice'
import { AddBoardModal } from '@/features/boards/modals/AddBoardModal/AddBoardModal'
import { useModal } from '@/hooks/useModal'

import {
  SidebarContainer,
  LogoLink,
  QuantityBoards,
  HideSidebarButton,
  NewBoardButton,
  IconBoard,
} from './Sidebar.styles'

import SidebarItem from '../SidebarItem/SidebarItem'
import ThemeToggler from '../ThemeToggler/ThemeToggler'

interface ISidebarProps {
  toggleVisibleSidebar: () => void
}

export const Sidebar = ({ toggleVisibleSidebar }: ISidebarProps) => {
  const { data, isLoading, isSuccess, refetch } = useGetBoardsQuery()

  const { modalIsOpen, openModal, closeModal } = useModal({ onClose: refetch })

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <>
        {modalIsOpen && createPortal(<AddBoardModal closeModal={closeModal} />, document.body)}
        <SidebarContainer>
          <LogoLink to='/'>
            <Logo />
          </LogoLink>
          <QuantityBoards>ВСЕ ДОСКИ ({data.length})</QuantityBoards>
          <nav>
            <ul>
              {data.map(board => (
                <SidebarItem
                  id={board.id}
                  key={board.id}
                  title={board.title}
                />
              ))}
            </ul>
          </nav>
          <NewBoardButton
            onClick={() => {
              openModal()
              document.body.style.overflow = 'hidden'
            }}
          >
            <IconBoard />
            Создать новую доску
          </NewBoardButton>
          <ThemeToggler
            marginTop='auto'
            marginRight='auto'
            marginBottom='22px'
            marginLeft='auto'
          />
          <HideSidebarButton onClick={toggleVisibleSidebar} />
        </SidebarContainer>
      </>
    )
  }

  return null
}
