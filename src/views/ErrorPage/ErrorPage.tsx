import './ErrorPage.scss'
import { useLocation, useNavigate } from 'react-router-dom'
const ErrorPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateHome = () => {
    navigate('/')
  }
  const navigateBack = () => {
    console.log(location)
    navigate(-1)
  }
  return (
    <div className="error">
      <div className="error__wrapper">
        <span className="error__title">404</span>
        <span className="error__subtitle">Not Found</span>
        <div className="error__controls">
          {location.state && location.state.prevPath && (
            <button onClick={navigateBack} className="error__navigate-back">
              Back
            </button>
          )}
          <button onClick={navigateHome} className="error__navigate-main">
            To Main
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
