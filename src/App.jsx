import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import Login from './Pages/Login'
import Layout from './components/Layout'
import AssignWallet from './Pages/Dashboard/AssignWallet'
import Staff from './Pages/Dashboard/Staff'
import MainLayout from './components/MainLayout'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Layout />}>
        <Route index element={<Dashboard />}/>
        <Route path='staff' element={<Staff />}/>
        <Route path='assignWallet' element={<AssignWallet />}/>
        </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
