import { ISubtask } from '../../api/boardsApiSlice.types'

export interface ITask {
  id: string
  title: string
  description: string
  status: string
  columnId: string
  subtasks: ISubtask[]
}

export interface TasksApiResponse {
  data: ITask[]
}
