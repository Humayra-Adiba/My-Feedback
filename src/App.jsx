import Footer from "./components/Footer"
import FullHomepage from "./components/HomePage/FullHomepage"
import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {


  return (
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<FullHomepage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
