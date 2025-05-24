import './App.css'
import NavBar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import CallSticky from './components/CallSticky'
import Contact from './components/Contact'
import { Outlet } from 'react-router-dom'
function App() {
  

  return (
    <>
      <NavBar/>
      <CallSticky/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
