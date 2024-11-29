import { MouseEvent } from 'react'

import { useForm, useFieldArray, Controller } from 'react-hook-form'

import { Button, Input, ModalWrapper, TextArea, SelectComponent } from '@/components'

import { Form, SubTasksContainer, Title } from './EditTaskModal.styled'

import { IFormValues } from '../AddTaskModal/AddTaskModal.types'
import { ITask, IBoardsApiResponse } from '../../api/boardsApiSlice.types'
import { useUpdateTaskMutation } from '../../api/taskApiSlice'

interface IEditTaskModalProps {
  task: ITask
  boardData: IBoardsApiResponse
  closeModal: (event?: MouseEvent<HTMLDivElement>) => void
  closeEditTaskModal: () => void
}

export const EditTaskModal = ({ task, boardData, closeModal, closeEditTaskModal }: IEditTaskModalProps) => {
  const { columnId, description, title, subtasks, id } = task

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({
    defaultValues: {
      taskName: title,
      description: description,
      subtasks: subtasks.map(subtask => ({ value: subtask.title })),
      status: columnId,
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'subtasks',
  })

  const addNewSubTaskHandler = () => {
    append({ value: '' })
  }

  const deleteSubtaskHandler = (event: MouseEvent<HTMLButtonElement>, index?: number) => {
    event.preventDefault()
    remove(index)
  }

  const [updateTaskData] = useUpdateTaskMutation()

  const onSubmit = async (data: IFormValues) => {
    const updatedTask = {
      id: id,
      field: {
        title: data.taskName,
        columnId: data.status,
        description: data.description,
        subtasks: data.subtasks.map(subtask => ({ title: subtask.value })),
      },
    }
    await updateTaskData(updatedTask)
    closeModal()
  }

  return (
    <ModalWrapper
      title={`Редактировать задачу ${title}`}
      closeModal={closeEditTaskModal}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='taskName'
          title='Заголовок'
          placeholder='Название задачи'
          // @ts-ignore
          register={register}
          isRequired
          isValid={!errors['taskName']}
        />
        <TextArea
          register={register}
          name='description'
          title='Описание'
          placeholder='Например, It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
        />
        <SubTasksContainer>
          <Title>Подзадачи</Title>
          {fields.map((field, index) => {
            return (
              <Input
                key={field.id}
                name={`subtasks.${index}.value`}
                placeholder='Например, Make coffee'
                //@ts-ignore
                register={register}
                withDeleteButton
                isRequired
                isValid={!errors?.subtasks?.[index]}
                index={index}
                onDeleteClick={deleteSubtaskHandler}
              />
            )
          })}

          <Button
            title='+ Добавить новую задачу'
            isDisabled={false}
            secondary
            type='button'
            onClick={addNewSubTaskHandler}
          />
        </SubTasksContainer>
        <Controller
          control={control}
          name='status'
          render={({ field: { onChange, value, name, ref } }) => {
            return (
              <SelectComponent
                title='Статус'
                inputRef={ref}
                options={boardData.columns}
                value={boardData.columns?.find(c => c.id === value)}
                onChange={onChange}
              />
            )
          }}
        />
        <Button
          title='Сохранить'
          isDisabled={false}
        />
      </Form>
    </ModalWrapper>
  )
}
