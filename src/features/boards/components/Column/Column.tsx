import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'

import { ColumnWrapper, ColumnTitle, Dot, TitleWrapper } from './Column.styles'

import Task from '../Task/Task'
import { IBoardsApiResponse, IColumn, ITask } from '../../api/boardsApiSlice.types'
import { addColumns } from '../Board/columnsSlice'

interface IColumnProps {
  title: string
  id: string
  boardData: IBoardsApiResponse
  columnUpdate: (taskUpdate: ITask) => Promise<void>
  tasks?: ITask[]
}

const Column = ({ id, title, tasks, boardData, columnUpdate }: IColumnProps) => {
  const [activeDrag, setActiveDrag] = useState(false)
  const columns: IColumn[] = useAppSelector(state => state.columns.columns)
  const dispatch = useAppDispatch()

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, task: ITask) => {
    event.dataTransfer.setData('task', JSON.stringify(task))
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setActiveDrag(true)
  }

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    setActiveDrag(false)
    const taskDrop = JSON.parse(event.dataTransfer.getData('task'))
    const taskUpdate = { ...taskDrop, columnId: id }

    if (taskDrop.columnId === id) return

    const columnsUpdate: IColumn[] = []

    columns.forEach(column => {
      if (column.id === taskDrop.columnId) {
        const deleteTasks = column.tasks.filter(task => task.id !== taskDrop.id)
        columnsUpdate.push({ ...column, tasks: deleteTasks })
      } else if (column.id === id) {
        columnsUpdate.push({ ...column, tasks: [...column.tasks, taskUpdate] })
      } else {
        columnsUpdate.push(column)
      }
    })
    dispatch(addColumns(columnsUpdate))
    columnUpdate(taskUpdate)
  }

  const handleDragLeave = () => {
    setActiveDrag(false)
  }

  return (
    <ColumnWrapper
      $activeDrag={activeDrag}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
    >
      <TitleWrapper>
        <Dot />
        <ColumnTitle>
          {title} ({tasks ? tasks.length : 0})
        </ColumnTitle>
      </TitleWrapper>
      {tasks &&
        tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            boardData={boardData}
            onDragStart={handleDragStart}
          />
        ))}
    </ColumnWrapper>
  )
}

export default Column
