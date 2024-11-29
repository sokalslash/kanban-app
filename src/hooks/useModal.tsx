import { useState, MouseEvent } from 'react'

export const useModal = ({ onClose }: { onClose?: () => void }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModalHandler = () => setModalIsOpen(true)
  const closeModalHandler = (event?: MouseEvent<HTMLDivElement>) => {
    if (!event || event.target === event.currentTarget) {
      setModalIsOpen(false)
    }
    onClose?.()
  }

  return { modalIsOpen, openModal: openModalHandler, closeModal: closeModalHandler }
}
