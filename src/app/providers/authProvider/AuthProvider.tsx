import { useEffect } from 'react'

import { useAppDispatch } from '@app/hooks'
import { addAuthUser } from '@features/user/userSlice'
import { useLazyGetUserQuery } from '@/features/user/userApiSlice'

import { IAuthProviderProps } from './AuthProvider.types'

export const AuthProvider = (props: IAuthProviderProps) => {
  const token = localStorage.getItem('token')
  const [getUser, { data }] = useLazyGetUserQuery()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (token) {
      getUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    data && dispatch(addAuthUser(data))
  }, [data, dispatch])

  return <>{props.children}</>
}
