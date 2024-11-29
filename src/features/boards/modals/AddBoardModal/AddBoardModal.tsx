import { MouseEvent } from 'react'

import { useForm, useFieldArray } from 'react-hook-form'

import { ModalWrapper } from '@/components/ModalWrapper/ModalWrapper'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

import { ColumnContainer } from './AddBoardModal.styles'
import { FormValues } from './AddBoardModal.types'

import { useCreateBoardMutation } from '../../api/boardsApiSlice'

interface AddBoardProps {
  closeModal: (event?: MouseEvent<HTMLDivElement>) => void
}

export const AddBoardModal = ({ closeModal }: AddBoardProps) => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      boardName: '',
      columns: [{ title: 'Бэклог' }, { title: 'В работе' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'columns',
  })

  const [createNewBoard] = useCreateBoardMutation()

  const addNewColumnHandler = () => {
    append({ title: '' })
  }

  const deleteColumnHandler = (event: MouseEvent<HTMLButtonElement>, index?: number) => {
    event.preventDefault()
    remove(index)
  }

  const onSubmit = async (newBoardData: any) => {
    const newBoardWithColumns = {
      title: newBoardData.boardName,
      columns: newBoardData.columns,
    }
    await createNewBoard(newBoardWithColumns)
    closeModal()
  }

  return (
    <ModalWrapper
      title='Создать новую доску'
      closeModal={closeModal}
    >
      <form onSubmit={handleSubmit(newBoardData => onSubmit(newBoardData))}>
        <Input
          name='boardName'
          title='Название'
          placeholder='Название доски'
          // @ts-ignore
          register={register}
          isRequired
          isValid={!errors['boardName']}
        />
        <ColumnContainer>
          {fields.map((field, index) => {
            return (
              <Input
                key={field.id}
                name={`columns.${index}.title`}
                title='Колонки'
                placeholder='Название колонки'
                withDeleteButton
                required
                // @ts-ignore
                register={register}
                index={index}
                onDeleteClick={deleteColumnHandler}
              />
            )
          })}
          <Button
            title='+ Добавить новую колонку'
            isDisabled={false}
            secondary
            marginBottom='24'
            onClick={addNewColumnHandler}
          />
          <Button
            title='Создать новую доску'
            isDisabled={false}
          />
        </ColumnContainer>
      </form>
    </ModalWrapper>
  )
}
