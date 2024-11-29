import { createApi } from '@reduxjs/toolkit/query/react'

import { axiosBaseQuery } from '@app/axiosBaseQuery'

import { TasksApiResponse } from '../components/Task/Task.types'

export const taskApiSlice = createApi({
  baseQuery: axiosBaseQuery({ endPointSuffix: `tasks` }),
  reducerPath: 'taskApi',
  tagTypes: ['Task'],
  endpoints: build => ({
    createTask: build.mutation({
      query: newTaskData => ({ url: '/create-with-subtasks', method: 'POST', data: newTaskData }),
    }),
    getTasks: build.query<TasksApiResponse, void>({
      query: columnId => ({ url: `by-column/${columnId}` }),
    }),
    updateTask: build.mutation({
      query: updatedTask => ({
        url: `update-with-subtasks/${updatedTask.id}`,
        method: 'PATCH',
        data: updatedTask.field,
      }),
    }),
    updateTaskStatus: build.mutation({
      query: updatedData => ({
        url: `update-with-subtasks/${updatedData.id}`,
        method: 'PATCH',
        data: updatedData.field,
      }),
    }),
    moveTask: build.mutation({
      query: updatedData => ({
        url: `move-task/${updatedData.id}`,
        method: 'PATCH',
        data: updatedData,
      }),
    }),
    deleteTask: build.mutation({
      query: taskData => ({
        url: `${taskData.id}`,
        method: 'DELETE',
        data: taskData,
      }),
    }),
  }),
})

export const {
  useCreateTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
  useUpdateTaskStatusMutation,
  useMoveTaskMutation,
  useDeleteTaskMutation,
} = taskApiSlice
