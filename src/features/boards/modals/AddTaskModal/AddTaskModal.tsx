import { MouseEvent } from 'react'

import { Controller, useFieldArray, useForm } from 'react-hook-form'

import { ModalWrapper } from '@/components/ModalWrapper/ModalWrapper'
import { TextArea } from '@/components/TextArea/TextArea'
import { Button, Input } from '@/components'
import { SelectComponent } from '@/components/Select/Select'

import { SubTasksContainer, TaskModalWrapper } from './AddTaskModal.styles'
import { IFormValues } from './AddTaskModal.types'

import { IBoardsApiResponse } from '../../api/boardsApiSlice.types'
import { useCreateTaskMutation } from '../../api/taskApiSlice'

interface IAddTaskModalProps {
  closeModal: (event?: MouseEvent<HTMLDivElement>) => void
  boardData: IBoardsApiResponse
}

export const AddTaskModal = ({ boardData, closeModal }: IAddTaskModalProps) => {
  const { control, register, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      taskName: '',
      description: '',
      subtasks: [{ value: '' }, { value: '' }],
      status: '',
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'subtasks',
  })

  const [createNewTask] = useCreateTaskMutation()

  const addNewSubTaskHandler = () => {
    append({ value: '' })
  }

  const deleteSubtaskHandler = (event: MouseEvent<HTMLButtonElement>, index?: number) => {
    event.preventDefault()
    remove(index)
  }

  const onSubmit = async (newTaskData: any) => {
    const newTask = {
      columnId: newTaskData.status || boardData.columns?.[0]?.id,
      title: newTaskData.taskName,
      description: newTaskData.description,
      subtasks: newTaskData.subtasks.map((subtask: any) =>
        subtask.id ? { title: subtask.value } : { id: subtask.id, title: subtask.value }
      ),
    }
    await createNewTask(newTask)
    closeModal()
  }

  return (
    <ModalWrapper
      title='Добавить новую задачу'
      closeModal={closeModal}
    >
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TaskModalWrapper>
            <Input
              name='taskName'
              title='Заголовок'
              placeholder='Например, Take coffee break'
              //@ts-ignore
              register={register}
              isRequired
            />
            <TextArea
              name='description'
              title='Описание'
              placeholder='Например,  It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
              //@ts-ignore
              register={register}
            />
            <SubTasksContainer>
              {fields.map((field, index) => {
                return (
                  <Input
                    key={field.id}
                    name={`subtasks.${index}.value`}
                    title={index === 0 ? 'Подзадачи' : ''}
                    placeholder={
                      index === 0 ? 'Например, Make coffee' : index === 1 ? 'Например, Drink coffee & smile' : ''
                    }
                    //@ts-ignore
                    register={register}
                    withDeleteButton
                    required
                    index={index}
                    onDeleteClick={deleteSubtaskHandler}
                  />
                )
              })}
              <Button
                title='+ Добавить новую задачу'
                isDisabled={false}
                secondary
                onClick={addNewSubTaskHandler}
              />
            </SubTasksContainer>
            <Controller
              control={control}
              name='status'
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <SelectComponent
                    title='Статус'
                    ref={ref}
                    options={boardData.columns}
                    defaultValue={boardData.columns?.[0]}
                    value={boardData.columns?.find(c => c.id === value)}
                    onChange={onChange}
                  />
                )
              }}
            />
            <Button
              title='Создать'
              isDisabled={false}
            />
          </TaskModalWrapper>
        </form>
      </>
    </ModalWrapper>
  )
}
