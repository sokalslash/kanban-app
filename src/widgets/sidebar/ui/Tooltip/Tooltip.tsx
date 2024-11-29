import { TooltipContainer } from './Tootltip.styles'

interface TooltipProps {
  showTooltip: boolean
  title: string
}

export const Tooltip = ({ showTooltip, title }: TooltipProps) => {
  return <TooltipContainer className={showTooltip ? 'show' : ''}>{title}</TooltipContainer>
}
