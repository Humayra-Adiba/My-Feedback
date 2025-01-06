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
    </BrowserRouter>
  )
}

export default App
