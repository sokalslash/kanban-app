import { createApi } from '@reduxjs/toolkit/query/react'

import { UserApiResponse, ILoginRequest } from './User.types'

import { axiosBaseQuery } from '../../app/axiosBaseQuery'

export const authUserApiSlice = createApi({
  baseQuery: axiosBaseQuery({ endPointSuffix: `auth/` }),
  reducerPath: 'authUserApi',
  tagTypes: ['AuthUser'],
  endpoints: build => ({
    loginUser: build.mutation<UserApiResponse, ILoginRequest>({
      query: loginData => ({ url: 'login', method: 'POST', data: loginData }),
    }),
    getUser: build.query<UserApiResponse, void>({
      query: () => ({ url: 'profile', method: 'GET' }),
    }),
    registerUser: build.mutation<UserApiResponse, ILoginRequest>({
      query: authData => ({ url: 'register', method: 'POST', data: authData }),
    }),
  }),
})

export const { useLoginUserMutation, useLazyGetUserQuery, useRegisterUserMutation } = authUserApiSlice
