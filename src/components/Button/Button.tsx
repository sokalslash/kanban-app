import { ButtonContainer } from './Button.styles'

export interface IButtonProps {
  title: string
  isDisabled: boolean
  width?: string
  secondary?: boolean
  isTransparent?: boolean
  destructive?: boolean
  size?: 'S' | 'L'
  marginBottom?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: React.FormEvent) => void
}

export const Button = ({
  width,
  title,
  isDisabled,
  type = 'submit',
  secondary = false,
  isTransparent = false,
  destructive = false,
  size = 'S',
  marginBottom,
  onClick,
}: IButtonProps) => {
  const buttonHandler = (event: React.FormEvent) => {
    if (onClick) {
      event.preventDefault()
      onClick(event)
    }
  }
  return (
    <ButtonContainer
      width={width}
      disabled={isDisabled}
      type={type}
      $secondary={secondary}
      $isTransparent={isTransparent}
      $destructive={destructive}
      $marginBottom={marginBottom}
      onClick={buttonHandler}
      $size={size}
    >
      {title}
    </ButtonContainer>
  )
}
