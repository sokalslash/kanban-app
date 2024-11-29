import { PopupButton } from './DotsButton.styles'

export const DotsButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return <PopupButton onClick={onClick} />
}
