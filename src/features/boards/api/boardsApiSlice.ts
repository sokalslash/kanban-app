import { createApi } from '@reduxjs/toolkit/query/react'

import { axiosBaseQuery } from '@app/axiosBaseQuery'

import { IBoardsApiResponse } from './boardsApiSlice.types'

export const boardsApiSlice = createApi({
  baseQuery: axiosBaseQuery({ endPointSuffix: `boards` }),
  reducerPath: 'boardsApi',
  tagTypes: ['Boards'],
  endpoints: build => ({
    getBoards: build.query<IBoardsApiResponse[], void>({
      query: () => ({ url: '' }),
    }),
    createBoard: build.mutation({
      query: newBoardData => ({ url: '/create-with-columns', method: 'POST', data: newBoardData }),
    }),
    getBoardById: build.query<IBoardsApiResponse, string>({
      query: id => ({ url: `${id}` }),
    }),
    updateBoard: build.mutation<IBoardsApiResponse, IBoardsApiResponse>({
      query: updateData => ({ url: `update-with-columns/${updateData.id}`, method: 'PATCH', data: updateData }),
    }),
    deleteBoard: build.mutation<IBoardsApiResponse, string>({
      query: id => ({ url: `${id}`, method: 'DELETE' }),
    }),
  }),
})

export const {
  useGetBoardsQuery,
  useCreateBoardMutation,
  useGetBoardByIdQuery,
  useUpdateBoardMutation,
  useDeleteBoardMutation,
} = boardsApiSlice
