
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import AdminNavBar from './AdminNavBar'


export default function AdminLayout() {
  return (
    <div className='min-h-screen flex flex-col'>
        <header className='h-15 flex justify-center'>
            <AdminNavBar />
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
