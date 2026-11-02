import { Routes, Route } from 'react-router'
import TopNav from './components/TopNav'
import Home from './pages/Home'
import Test from './pages/Test'
import Users from './pages/Users'
import './App.css'

function App() {
  

  return (
    <>
      <TopNav></TopNav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      
    </>
  )
}

export default App
