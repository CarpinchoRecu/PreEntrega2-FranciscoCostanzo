import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Nosotros from "./components/Nosotros/Nosotros"
import Contacto from "./components/Contacto/Contacto"
import Error404 from "./components/Error404/Error404"
import PokeApi from "./ejemplos/PokeApi/PokeApi"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {

  return (

    <BrowserRouter>

        <Routes>
          <Route path="/pokeapi" element={<Header variant/>}/>
          <Route path="*" element={<Header />}/>
        </Routes>
     
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/pokeapi" element={<PokeApi />} />
          <Route path="*" element={ <Navigate to={"/"}/>}/>
          {/* <Route path="*" element={ <Error404 />}/> */}
        </Routes>

        {/* <Footer /> */}

    </BrowserRouter>
   
  )
}

export default App
