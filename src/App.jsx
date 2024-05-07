import { Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from "./pages/HomePage/HomePage";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
