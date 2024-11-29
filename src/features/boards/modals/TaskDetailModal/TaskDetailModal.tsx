import { useRef, useState } from 'react'

import { Controller, useForm } from 'react-hook-form'

import { useClickOutside } from '@/hooks/useClickOutside'
import { useModal } from '@/hooks/useModal'
import { ModalWrapper, SelectComponent } from '@/components'
import { DeleteTaskModal } from '@/features/boards/modals/DeleteTaskModal/DeleteTaskModal'
import { Checkbox } from '@/components/Checkbox/Checkbox'
import { useUpdateTaskStatusMutation, useDeleteTaskMutation } from '@features/boards/api/taskApiSlice'

import {
  ContainerSubtasks,
  Description,
  Status,
  Subtasks,
  TaskDetailWrapper,
  Popup,
  ButtonInPopup,
} from './TaskDetailModal.styles'

import { TotalSubtasks } from '../../components/Task/Task.styles'
import { IBoardsApiResponse, ISubtask, ITask } from '../../api/boardsApiSlice.types'
import { EditTaskModal } from '../EditTaskModal/EditTaskModal'
import { IFormValues } from '../AddTaskModal/AddTaskModal.types'

interface ITaskDetailModalProps {
  task: ITask
  boardData: IBoardsApiResponse
  openModal: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onClose: () => void
}

const TaskDetailModal = ({ task, boardData, onClose }: ITaskDetailModalProps) => {
  const { description, title, subtasks, id, columnId } = task

  const { columns } = boardData
  const [deleteTask] = useDeleteTaskMutation()
  const { control } = useForm<IFormValues>({
    defaultValues: {
      status: '',
    },
  })

  const [subtasksState, setSubtasksState] = useState<ISubtask[]>(subtasks)

  const [updateTaskData] = useUpdateTaskStatusMutation()

  const updateSubtaskStatusHandler = async (columnId: string, updatedSubtasks: ISubtask[]) => {
    await updateTaskData({ field: { subtasks: updatedSubtasks, columnId }, id })
  }

  const changeStatusHandler = async (selectedStatus: string, subtasksState: ISubtask[]) => {
    await updateTaskData({ field: { columnId: selectedStatus, subtasks: subtasksState }, id })
  }

  const { modalIsOpen: popupIsOpen, openModal: openPopup, closeModal: closePopup } = useModal({})
  const {
    modalIsOpen: deleteTaskModalIsOpen,
    openModal: openDeleteTaskModal,
    closeModal: closeDeleteTaskModal,
  } = useModal({})
  const {
    modalIsOpen: editTaskModalIsOpen,
    openModal: openEditTaskModal,
    closeModal: closeEditTaskModal,
  } = useModal({})

  const popupRef = useRef<HTMLDivElement>(null)

  useClickOutside(popupRef, closePopup)

  // удаление задачи
  const handleDeleteTask = async () => {
    try {
      const { id, columnId } = task
      await deleteTask({ id, columnId })
      onClose()
    } catch (error) {
      console.error('Error:', error)
    }
    closePopup()
  }
  return (
    <>
      {editTaskModalIsOpen ? (
        <EditTaskModal
          task={task}
          boardData={boardData}
          closeModal={onClose}
          closeEditTaskModal={closeEditTaskModal}
        />
      ) : (
        <ModalWrapper
          title={title}
          closeModal={onClose}
          withDotsBtn
          onDotsBtnClick={popupIsOpen ? closePopup : openPopup}
        >
          <>
            {deleteTaskModalIsOpen && (
              <DeleteTaskModal
                taskId={id}
                title={title}
                onClose={closeDeleteTaskModal}
                onDelete={handleDeleteTask}
              />
            )}
            <form>
              <TaskDetailWrapper>
                {popupIsOpen && (
                  <Popup ref={popupRef}>
                    <ButtonInPopup
                      $isWarning={false}
                      onClick={openEditTaskModal}
                    >
                      Редактировать задачу
                    </ButtonInPopup>
                    <ButtonInPopup
                      $isWarning
                      onClick={() => {
                        closePopup()
                        openDeleteTaskModal()
                      }}
                    >
                      Удалить задачу
                    </ButtonInPopup>
                  </Popup>
                )}
                <Description>{description}</Description>
                <ContainerSubtasks>
                  <TotalSubtasks>
                    {subtasksState.filter(subtask => subtask.isDone).length} из {subtasksState.length} подзадач{' '}
                  </TotalSubtasks>
                  <Subtasks>
                    {subtasksState.map(subtask => (
                      <Checkbox
                        key={subtask.id}
                        title={subtask.title}
                        isChecked={subtask.isDone}
                        onChange={() => {
                          const updatedSubtasks = subtasksState.map(prevSubtask => {
                            return {
                              id: prevSubtask.id,
                              title: prevSubtask.title,
                              isDone: prevSubtask.id === subtask.id ? !prevSubtask.isDone : prevSubtask.isDone,
                            }
                          })
                          setSubtasksState(updatedSubtasks)
                          updateSubtaskStatusHandler(columnId, updatedSubtasks)
                        }}
                      />
                    ))}
                  </Subtasks>
                </ContainerSubtasks>
                <Status>
                  <Controller
                    control={control}
                    name='status'
                    render={({ field: { onChange, value, ref } }) => {
                      return (
                        <SelectComponent
                          title='Статус'
                          ref={ref}
                          options={columns}
                          defaultValue={columns?.find(c => c.id === columnId)}
                          value={columns?.find(c => c.id === value)}
                          onChange={(currentId: string) => {
                            changeStatusHandler(currentId, subtasksState)
                            onChange(currentId)
                          }}
                        />
                      )
                    }}
                  />
                </Status>
              </TaskDetailWrapper>
            </form>
          </>
        </ModalWrapper>
      )}
    </>
  )
}

export default TaskDetailModal
