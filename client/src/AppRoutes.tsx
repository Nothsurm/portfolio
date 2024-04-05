import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<Navigate to='/'/>} /> {/* USER TYPES URL THAT DOESN'T EXIST */}
    </Routes>
  )
}

export default AppRoutes
