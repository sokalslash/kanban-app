import * as React from 'react'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { AuthProvider } from '@app/providers'
import { GlobalStyle } from '@app/styles/GlobalStyle.styles'
import { Board } from '@/features/boards/components/Board/Board'

import { store } from './app/store'
import { LoginPage, BoardPage } from './pages'

const container = document.getElementById('root')

const router = createBrowserRouter([
  {
    path: '/',
    element: <BoardPage />,
    children: [
      {
        path: 'boards/:id',
        element: <Board />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={router} />
          <GlobalStyle />
        </AuthProvider>
      </Provider>
    </React.StrictMode>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  )
}
