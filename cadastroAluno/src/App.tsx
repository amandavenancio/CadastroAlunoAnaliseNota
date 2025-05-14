import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandPage } from './pages/LandPage'
import { RegisterPage } from './pages/RegisterPage'
import { StudentsPerformancePage } from './pages/StudentsPerformancePage '

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/performance' element={<StudentsPerformancePage />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App