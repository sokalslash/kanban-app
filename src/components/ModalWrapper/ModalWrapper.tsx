import { FunctionComponent, ReactElement } from 'react'

import { DotsButton } from '@components'

import { Overlay, Container, TitleWrapper, Title } from './ModalWrapper.styles'

interface ModalWrapperProps extends React.PropsWithChildren {
  title: string
  children: ReactElement
  titleColor?: string
  closeModal?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  withDotsBtn?: boolean
  onDotsBtnClick?: () => void
}

export const ModalWrapper: FunctionComponent<ModalWrapperProps> = ({
  closeModal,
  title,
  withDotsBtn = false,
  onDotsBtnClick,
  titleColor,
  children,
}) => {
  const closeModalHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    closeModal?.(e)
    document.body.style.overflow = 'visible'
  }

  return (
    <Overlay onClick={e => closeModalHandler(e)}>
      <Container>
        <TitleWrapper>
          <Title color={titleColor}>{title}</Title>
          {withDotsBtn && <DotsButton onClick={onDotsBtnClick} />}
        </TitleWrapper>
        {children}
      </Container>
    </Overlay>
  )
}
