import { useEffect } from 'react'

export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (e: globalThis.MouseEvent) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(e.target)) {
      e.stopPropagation()
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
