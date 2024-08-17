import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Pianista from "./pages/Pianista"
import CompositoryArreglador from "./pages/CompositoryArreglador"
import Contacto from "./pages/Contacto"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Escritos from "./pages/Escritos"
import Recursos from "./pages/Recursos"
import "./index.css"

const App = () => {
  return (
  <div className="flex flex-col min-h-screen">
  
<Navbar />

<main className="flex-grow">

<Routes>

<Route exact path="/" element={<Home />}/>
<Route exact path="/pianista" element={<Pianista />}/>
<Route exact path="/compositor" element={<CompositoryArreglador />}/>
<Route exact path="/recursos" element={<Recursos />}/>
{/* <Route exact path="/escritos" element={<Escritos />}/>
<Route exact path="/contacto" element={<Contacto/>}/> */}

</Routes>

</main>

<Footer />

  </ div>
  )
}

export default App