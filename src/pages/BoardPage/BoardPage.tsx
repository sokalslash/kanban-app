import { useEffect, useRef } from 'react'

import { Outlet, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { useGetBoardsQuery } from '@/features/boards/api/boardsApiSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Sidebar } from '@/widgets/sidebar/ui'
import EmptyContent from '@/features/boards/components/EmptyBoard/EmptyContent'
import { toggleSidebar } from '@/app/appSlice'

import { Button, Container, ContainerMotion } from './BoardPage.styles'

export const BoardPage = () => {
  const { data, isLoading } = useGetBoardsQuery()
  const firstRenderRef = useRef(true)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { app } = useAppSelector(state => state.app)

  useEffect(() => {
    const isSidebarOpened = localStorage.getItem('isSidebarOpened')
    if (isSidebarOpened) {
      dispatch(toggleSidebar(isSidebarOpened === 'true' ? true : false))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (firstRenderRef.current && data?.length) {
      navigate(`/boards/${data[0].id}`)
      firstRenderRef.current = false
    }
  }, [data, navigate])

  const toggleVisibleSidebar = () => {
    dispatch(toggleSidebar(!app.isVisibleSidebar))
    localStorage.setItem('isSidebarOpened', JSON.stringify(!app.isVisibleSidebar))
  }

  if (isLoading) {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Loading...</h1>
      </div>
    )
  }
  return (
    <Container className='main'>
      <AnimatePresence>
        {app.isVisibleSidebar && (
          <ContainerMotion
            initial={{ x: -300, opacity: 0, height: '100vh' }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sidebar toggleVisibleSidebar={toggleVisibleSidebar} />
          </ContainerMotion>
        )}
      </AnimatePresence>
      {!app.isVisibleSidebar && (
        <AnimatePresence>
          <Button
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -54, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={toggleVisibleSidebar}
          />
        </AnimatePresence>
      )}
      <Outlet />
      {!data?.length && <EmptyContent type='emptyProject' />}
    </Container>
  )
}
