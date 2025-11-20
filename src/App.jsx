import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Content from "./components/Content"
import Card from "./components/Card"
import Crew from "./components/Crew"
import "./App.css"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <main>
        <div>
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/Content" element={<Content />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/Crew" element={<Crew />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
