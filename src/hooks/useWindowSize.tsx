import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth)
  function resizeHandler() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])
  return width
}
