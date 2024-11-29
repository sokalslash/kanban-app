import { MouseEvent } from 'react'

import { UseFormRegister } from 'react-hook-form'

import { FormValues } from '@/features/user/User.types'

import { LabelContainer, Title, InputContainer, DeleteButton, InputWrapper, ValidationWrapper } from './Input.styles'

export interface IInputProps {
  name: string
  register: UseFormRegister<FormValues>
  placeholder: string
  title?: string
  isRequired?: boolean
  isValid?: boolean
  type?: string
  withDeleteButton?: boolean
  onDeleteClick?: (event: MouseEvent<HTMLButtonElement>, index?: number) => void
  index?: number
}

export const Input = ({
  name,
  title,
  register,
  isRequired = false,
  isValid = true,
  type = 'text',
  placeholder,
  withDeleteButton,
  onDeleteClick,
  index,
}: IInputProps) => {
  return (
    <LabelContainer>
      {title && <Title required={isRequired}>{title}</Title>}
      <InputWrapper>
        <ValidationWrapper $isValid={isValid}>
          <InputContainer
            placeholder={placeholder}
            type={type}
            //@ts-ignore
            {...register(`${name}`, { required: isRequired })}
          />
        </ValidationWrapper>
        {withDeleteButton && <DeleteButton onClick={event => onDeleteClick && onDeleteClick(event, index)} />}
      </InputWrapper>
    </LabelContainer>
  )
}
