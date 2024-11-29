import { useParams } from 'react-router-dom'

import { useModal } from '@/hooks/useModal'
import { useGetBoardByIdQuery } from '@features/boards/api/boardsApiSlice'

import { TaskWrapper, Title, TotalSubtasks } from './Task.styles'

import TaskDetailModal from '../../modals/TaskDetailModal/TaskDetailModal'
import { IBoardsApiResponse, ITask } from '../../api/boardsApiSlice.types'

interface ITaskProps {
  task: ITask
  boardData: IBoardsApiResponse
  onDragStart: (event: React.DragEvent<HTMLDivElement>, task: ITask) => void
}

const Task = ({ task, boardData, onDragStart }: ITaskProps) => {
  const { subtasks } = task
  const { id } = useParams()
  const { refetch } = useGetBoardByIdQuery(id ?? '')

  const { modalIsOpen, openModal, closeModal } = useModal({ onClose: refetch })

  return (
    <>
      {modalIsOpen && (
        <TaskDetailModal
          task={task}
          boardData={boardData}
          onClose={closeModal}
        />
      )}
      <TaskWrapper
        layout
        layoutId={task.id}
        draggable
        onClick={openModal}
        // @ts-ignore
        onDragStart={event => onDragStart(event, task)}
      >
        <Title>{task.title}</Title>
        <TotalSubtasks>
          {subtasks.filter(subtask => subtask.isDone).length} из {subtasks.length} подзадач
        </TotalSubtasks>
      </TaskWrapper>
    </>
  )
}

export default Task
