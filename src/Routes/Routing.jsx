import {Routes, Route} from "react-router-dom"
import Products from "../components/products/Products"
import Cart from "../components/cart/Cart"

const Routing = () => {

  return (
    <>
        <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </>
  )
}

export default Routing