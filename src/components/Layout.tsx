import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}
