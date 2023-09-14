import { Breakpoints } from '@/enum/Breakpoints.ts'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useMemo } from 'react'

const useWindowWidth = () => {
  const windowWidth = useSelector((state: RootState) => state.main.windowWidth)

  const isMobile = useMemo(
    () => windowWidth < Breakpoints.TABLET,
    [windowWidth],
  )
  const isTablet = useMemo(
    () =>
      windowWidth >= Breakpoints.TABLET && windowWidth < Breakpoints.DESKTOP,
    [windowWidth],
  )
  const isDesktop = useMemo(
    () => windowWidth >= Breakpoints.DESKTOP,
    [windowWidth],
  )

  return {
    isMobile,
    isTablet,
    isDesktop,
  }
}

export { useWindowWidth }
