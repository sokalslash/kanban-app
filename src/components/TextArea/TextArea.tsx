import { UseFormRegister } from 'react-hook-form'

import { TextAreaContainer, TextAreaLabel, TextAreaWrapper } from './TextArea.styles'
interface ITextAreaProps {
  name: string
  title: string
  placeholder: string
  register: UseFormRegister<any>
}

export const TextArea = ({ name, title, placeholder, register }: ITextAreaProps) => {
  return (
    <TextAreaLabel>
      {title}
      <TextAreaWrapper>
        <TextAreaContainer
          placeholder={placeholder}
          //@ts-ignore
          {...register(name)}
        />
      </TextAreaWrapper>
    </TextAreaLabel>
  )
}
