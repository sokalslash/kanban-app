type EmptyBoard = {
  boardTitle: string
  buttonTitle: string
}

export type EmptyContentType = 'emptyBoard' | 'emptyProject'

export const EmptyBoards: Record<EmptyContentType, EmptyBoard> = {
  emptyProject: {
    boardTitle: 'Чтобы начать, создайте новую доску',
    buttonTitle: 'Создать доску',
  },
  emptyBoard: {
    boardTitle: 'Доска пуста. Чтобы начать, создайте новую колонку',
    buttonTitle: 'Добавить новую колонку',
  },
}
