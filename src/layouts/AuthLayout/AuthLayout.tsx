import './AuthLayout.scss'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => (
  <div className="simple-layout">
    <div>Auth layout</div>
    <Outlet />
  </div>
)

export default AuthLayout
