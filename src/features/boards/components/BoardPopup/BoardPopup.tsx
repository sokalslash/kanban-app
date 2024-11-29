import { useRef } from 'react'

import { useClickOutside } from '@/hooks/useClickOutside'

import { PopupContainer, ButtonContainer, StyledButton } from './BoardPopup.styles'

interface BoardPopupProps {
  onClose: () => void
}

const BoardPopup: React.FC<BoardPopupProps> = ({ onClose }) => {
  const ref = useRef(null)

  useClickOutside(ref, onClose)

  return (
    <PopupContainer ref={ref}>
      <ButtonContainer>
        <StyledButton
          $buttonType='edit'
          onClick={onClose}
        >
          Редактировать доску
        </StyledButton>
        <StyledButton
          $buttonType='delete'
          onClick={onClose}
        >
          Удалить доску
        </StyledButton>
      </ButtonContainer>
    </PopupContainer>
  )
}

export default BoardPopup
