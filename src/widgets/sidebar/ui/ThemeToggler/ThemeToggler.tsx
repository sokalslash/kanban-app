import { TogglerContainer, TogglerLabel, Input, Toggler } from './ThemeToggler.styles'

export interface ThemeTogglerProps {
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
}

const ThemeToggler = ({
  marginTop = '0px',
  marginRight = '0px',
  marginBottom = '0px',
  marginLeft = '0px',
}: ThemeTogglerProps) => {
  return (
    <TogglerContainer
      $marginTop={marginTop}
      $marginRight={marginRight}
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
    >
      <TogglerLabel>
        <Input />
        <Toggler />
      </TogglerLabel>
    </TogglerContainer>
  )
}

export default ThemeToggler
