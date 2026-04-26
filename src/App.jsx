
// import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
// import Feature from './Components/Features'
// import PortfolioCarousel from './Components/PortfolioCarousel'
// const App = () => {
//   return (
//     <div>
      
//       <Navbar/>
//       <Hero/>
//       <Feature/>
//       <PortfolioCarousel/>

//     </div>
//   )
// }

// export default App







import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App