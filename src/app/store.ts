import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { boardsApiSlice } from '@features/boards/api/boardsApiSlice'
import { authUserApiSlice } from '@features/user/userApiSlice'
import { taskApiSlice } from '@features/boards/api/taskApiSlice'
import userReducer from '@features/user/userSlice'
import columnsReducer from '@/features/boards/components/Board/columnsSlice'
import appReducer from '@app/appSlice'

const rootReducer = combineSlices(boardsApiSlice, taskApiSlice, authUserApiSlice, {
  user: userReducer,
  app: appReducer,
  columns: columnsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat([
        boardsApiSlice.middleware,
        taskApiSlice.middleware,
        authUserApiSlice.middleware,
      ])
    },
    preloadedState,
  })
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>
