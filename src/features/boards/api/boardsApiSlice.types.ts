export interface ITask {
  id: string
  title: string
  description: string
  status: string
  columnId: string
  subtasks: ISubtask[]
}

export interface ISubtask {
  id: string
  title: string
  isDone: boolean
  description?: string
  taskId?: string
}

export interface IColumn {
  title: string
  description: string
  id: string
  boardId: string
  tasks: ITask[]
}

export interface IBoardShares {
  userId: string
}

export interface IBoardsApiResponse {
  id: string
  title: string
  description: string
  userId: string
  columns?: IColumn[]
  boardShares?: IBoardShares[]
}
