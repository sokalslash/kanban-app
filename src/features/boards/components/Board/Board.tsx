import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useGetBoardByIdQuery } from '@features/boards/api/boardsApiSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

import { addColumns } from './columnsSlice'

import { Header } from '../Header/Header'
import EmptyContent from '../EmptyBoard/EmptyContent'
import { BoardContainer } from '../BoardContainer/BoardContainer'
import { useMoveTaskMutation } from '../../api/taskApiSlice'
import { IColumn } from '../../api/boardsApiSlice.types'
import { AddColumn } from '../AddColumn/AddColumn'
import Column from '../Column/Column'
import { ITask } from '../Task/Task.types'

export const Board = () => {
  const { id } = useParams()
  const { data: boardData, isLoading } = useGetBoardByIdQuery(id ?? '')
  const [moveTask] = useMoveTaskMutation()
  const dispatch = useAppDispatch()
  const columns: IColumn[] = useAppSelector(state => state.columns.columns)

  useEffect(() => {
    boardData && dispatch(addColumns(boardData.columns))
  }, [boardData, dispatch])

  const columnUpdate = async (taskUpdate: ITask) => {
    await moveTask({ id: taskUpdate.id, newColumnId: `${taskUpdate.columnId}` })
  }

  if (isLoading) {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Loading...</h1>
      </div>
    )
  }

  return (
    <>
      {boardData && <Header boardData={boardData} />}
      {boardData?.columns && boardData.columns.length > 0 ? (
        <>
          <BoardContainer>
            {columns.map(column => (
              <Column
                key={column.id}
                id={column.id}
                title={column.title}
                tasks={column.tasks}
                boardData={boardData}
                columnUpdate={columnUpdate}
              />
            ))}
            <AddColumn />
          </BoardContainer>
        </>
      ) : (
        <EmptyContent type='emptyBoard' />
      )}
    </>
  )
}
