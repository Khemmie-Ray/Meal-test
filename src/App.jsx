import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login'
import Layout from './components/Layout'
import AssignWallet from './pages/Dashboard/AssignWallet'
import Staff from './pages/Dashboard/Staff'
import MainLayout from './components/MainLayout'
import Employee from './pages/Employee'
import Vendor from './pages/Vendor'
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />}/>
        <Route path='login/employee' element={<Employee />}/>
        <Route path='login/vendor' element={<Vendor />}/>
        <Route path='login/dashboard' element={<Layout />}>
        <Route index element={<Dashboard />}/>
        <Route path='staff' element={<Staff />}/>
        <Route path='assignWallet' element={<AssignWallet />}/>Route
        </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
