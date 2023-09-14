import './DeviceDisplayer.scss'
import { useWindowWidth } from '@/hooks/useWindowWidth.ts'

const DeviceDisplayer = () => {
  const { isMobile, isTablet, isDesktop } = useWindowWidth()
  const WindowWidth = () => {
    if (isMobile) {
      return <span>i am mobile</span>
    } else if (isTablet) {
      return <span>i am tablet</span>
    } else if (isDesktop) {
      return <span>i am desktop</span>
    } else {
      return <span>i dont know which device is this</span>
    }
  }

  return <WindowWidth />
}

export default DeviceDisplayer
