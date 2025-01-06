import Navbar from "./components/Navbar"
import {BrowserRouter, Routes} from 'react-router-dom'
import AllTopic from './components/HomePage/AllTopic'
function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <AllTopic/>
      <Routes>

      </Routes>
    </BrowserRouter>
  )
}

export default App
