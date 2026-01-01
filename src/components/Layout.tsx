import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='min-h-screen flex flex-col'>
        <header className='bg-cyan-500 h-15'>
            <NavBar />
        </ header > 
        <main className='flex-1'>
            <Outlet />
        </main>
        <footer className='bg-blue-500 h-10'>
            <Footer />
        </footer >
    </ div >
    
  )
}
