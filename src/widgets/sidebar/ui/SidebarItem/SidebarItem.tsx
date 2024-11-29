import { useState } from 'react'

import { SidebarItemContainer, SidebarLink, IconBoard } from './SidebarItem.styles'

import { Tooltip } from '../Tooltip/Tooltip'

const MAX_LENGTH_TITLE = 23

const SidebarItem = ({ title, id }: { title: string; id: string }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  return (
    <SidebarItemContainer>
      <SidebarLink
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        to={`boards/${id}`}
      >
        <IconBoard />
        {title}
      </SidebarLink>
      {showTooltip && title.length > MAX_LENGTH_TITLE && (
        <Tooltip
          title={title}
          showTooltip={showTooltip}
        />
      )}
    </SidebarItemContainer>
  )
}

export default SidebarItem
