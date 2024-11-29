import { useForm } from 'react-hook-form'

import { Input, Button } from '@components'
import { Wrapper } from '@features/user/components/'

import { FormValues } from '../../User.types'

interface ILoginFormProps {
  isLoading: boolean
  sendAuth: (authData: FormValues) => {}
}

export const LoginForm = ({ isLoading, sendAuth }: ILoginFormProps) => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(authData => sendAuth(authData))}>
      <Wrapper>
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
          title='Войти'
          isDisabled={isLoading}
          size='L'
        />
      </Wrapper>
    </form>
  )
}
