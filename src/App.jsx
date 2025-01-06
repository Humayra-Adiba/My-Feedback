import Footer from "./components/Footer"
import FullHomepage from "./components/HomePage/FullHomepage"
import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AllRestaurants from "./components/Resturant"
import ResturantDetails from "./components/ResturantDetails"
function App() {


  return (
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<FullHomepage/>}/>
        <Route path="/restuarant" element={<AllRestaurants/>}/>
        <Route path="/Restaurant_Details" element={<ResturantDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
