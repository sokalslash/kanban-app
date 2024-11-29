import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Logo } from '@components'
import { useAppDispatch } from '@/app/hooks'
import { useLoginUserMutation, useRegisterUserMutation } from '@features/user/userApiSlice'
import { addAuthUser } from '@features/user/userSlice'
import { FormValues } from '@/features/user/User.types'
import { LoginForm, RegisterForm } from '@features/user/components'

import { ToggleButton, Container, ContainerLinks, Wrapper, AppLogo } from './LoginPage.styles'

export const LoginPage = () => {
  const dispatch = useAppDispatch()
  const [isLogin, setIsLogin] = useState(true)

  const [loginUser, { isLoading: isLoadingLogin }] = useLoginUserMutation()
  const [registerUser, { isLoading: isLoadingRegister }] = useRegisterUserMutation()

  const navigate = useNavigate()

  const sendAuth = async (authData: FormValues) => {
    let data
    try {
      if (isLogin) {
        data = (await loginUser(authData)).data
      } else {
        data = (await registerUser(authData)).data
      }
      if (data) {
        localStorage.setItem('token', data.access_token)
        dispatch(addAuthUser(data.user))
        navigate('/')
      }
    } catch (error) {
      console.error('Authentication failed:', error)
    }
  }

  return (
    <Container>
      <Wrapper>
        <AppLogo>
          <Logo />
        </AppLogo>
        <ContainerLinks>
          <ToggleButton
            $isActive={isLogin}
            onClick={() => setIsLogin(false)}
          >
            Регистрация
          </ToggleButton>
          <ToggleButton
            $isActive={!isLogin}
            onClick={() => setIsLogin(true)}
          >
            Вход
          </ToggleButton>
        </ContainerLinks>
        {isLogin ? (
          <LoginForm
            isLoading={isLoadingLogin}
            sendAuth={sendAuth}
          />
        ) : (
          <RegisterForm
            isLoading={isLoadingRegister}
            sendAuth={sendAuth}
          />
        )}
      </Wrapper>
    </Container>
  )
}
