import Navbar from "./components/Navbar"
import "./App.css"
import Banner from "./components/Banner"
import Content from "./components/Content"
import Crew from "./components/Crew"
import Card from "./components/Card"

 const App = ()=>{

  return(
    <>
     <Navbar/>
     
     <section>
      <Banner/>
     </section>
     <section>
      <Content/>
     </section>
     <section>
      <Crew/>
     </section>
     <section>
      <Card/>
     </section>
  
    </>
   
  )
 }
 export default App