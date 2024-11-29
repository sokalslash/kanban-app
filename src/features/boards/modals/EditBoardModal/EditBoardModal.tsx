import { useFieldArray, useForm } from 'react-hook-form'

import { useUpdateBoardMutation } from '@features/boards/api/boardsApiSlice'
import { Button, Input, ModalWrapper } from '@/components'

import { ColumnContainer, Form, Title } from './EditBoardModal.styles'

import { IBoardsApiResponse } from '../../api/boardsApiSlice.types'

interface IEditBoardModalProps {
  boardData: IBoardsApiResponse
}

export const EditBoardModal = ({ boardData }: IEditBoardModalProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBoardsApiResponse>({
    defaultValues: boardData,
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'columns',
  })

  const [updateBoard, { isLoading }] = useUpdateBoardMutation()

  const addNewColumnHandler = () => {
    return append({ title: '', description: '', id: '', boardId: '', tasks: [] })
  }
  const deleteColumnHandler = (event: React.FormEvent, indexDelete: number | undefined) => {
    event.preventDefault()
    return remove(indexDelete)
  }

  const onSubmit = async (updateBoardData: IBoardsApiResponse) => {
    await updateBoard(updateBoardData)
  }

  return (
    <ModalWrapper title={`Редактировать доску ${boardData?.title}`}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='title'
          title='Название'
          type='text'
          placeholder='Название доски'
          //@ts-ignore
          register={register}
          isRequired
          isValid={!errors['title']}
        />

        <ColumnContainer>
          <Title>Колонки</Title>
          {fields.map((field, index) => {
            return (
              <Input
                key={index}
                name={`columns.${index}.title`}
                placeholder='Название колонки'
                withDeleteButton
                //@ts-ignore
                register={register}
                index={index}
                onDeleteClick={deleteColumnHandler}
                isRequired
                isValid={!errors?.columns?.[index]}
              />
            )
          })}
          <Button
            type='button'
            title='+ Добавить новую колонку'
            isDisabled={false}
            secondary
            onClick={addNewColumnHandler}
          />
        </ColumnContainer>

        <Button
          title='Сохранить'
          isDisabled={isLoading}
        />
      </Form>
    </ModalWrapper>
  )
}
