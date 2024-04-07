import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage'

const AppRoutes = () => {
  return (
    <>
      <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      theme="dark"/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<Navigate to='/'/>} /> {/* USER TYPES URL THAT DOESN'T EXIST */}
      </Routes>
    </>
  )
}

export default AppRoutes
