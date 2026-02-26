import {Routes,Route} from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  return (
    <div>
     <Header />
     <Routes>
     <Route element="Home" path="/" >Home</Route>
     <Route element="About" path="/about" >About</Route>
     <Route element="Product" path="/product" >Product</Route>
     <Route element="Contact" path="/contact" >Contact</Route>
    </Routes>
  
    </div>
  )
}

export default App
