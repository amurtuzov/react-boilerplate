import './App.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { updateWindowWidth } from '@/store/main'

const App = () => {
  const dispatch = useDispatch()
  const dispatchWindowWidthUpdate = () => {
    dispatch(updateWindowWidth(window.innerWidth))
  }

  useEffect(() => {
    window.addEventListener('resize', dispatchWindowWidthUpdate)
    return () => {
      window.removeEventListener('resize', dispatchWindowWidthUpdate)
    }
  })
  return <RouterProvider router={router} />
}

export default App
