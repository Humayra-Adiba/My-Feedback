import Footer from "./components/Footer"
import FullHomepage from "./components/HomePage/FullHomepage"
import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AllRestaurants from "./components/Resturant"
function App() {


  return (
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<FullHomepage/>}/>
        <Route path="/restuarant" element={<AllRestaurants/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
