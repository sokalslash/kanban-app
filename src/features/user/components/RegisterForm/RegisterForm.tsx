import { useForm } from 'react-hook-form'

import { Button, Input } from '@components'
import { Wrapper } from '@features/user/components'

import { FormValues } from '../../User.types'

interface IRegisterFormProps {
  isLoading: boolean
  sendAuth: (authData: FormValues) => {}
}

export const RegisterForm = ({ isLoading, sendAuth }: IRegisterFormProps) => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(registerData => sendAuth(registerData))}>
      <Wrapper>
        <Input
          title='Имя'
          type='text'
          name='username'
          register={register}
          placeholder='Константин'
        />
        <Input
          title='E-mail'
          type='text'
          name='email'
          register={register}
          placeholder='example@gmail.com'
        />
        <Input
          title='Пароль'
          type='password'
          name='password'
          register={register}
          placeholder='******'
        />
        <Button
          title='Регистрация'
          isDisabled={isLoading}
          size='L'
        />
      </Wrapper>
    </form>
  )
}
