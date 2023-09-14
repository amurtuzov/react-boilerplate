import './MainLayout.scss'
import { Outlet } from 'react-router-dom'

const MainLayout = () => (
  <div className="main">
    {/*header*/}
    <main>
      <Outlet />
    </main>
    {/*footer*/}
  </div>
)

export default MainLayout
