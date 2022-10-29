import { Link } from "react-router-dom"
import {RiShoppingCart2Line} from "react-icons/ri"

import "./header.css"
import { useProducts } from "../context/ProductsProvider"

const Header = () => {

    const {cartItems} = useProducts()

  return (
    <header className="header">
            <div className="">
                <h1>
                    <Link to="/" className="logo">SimpleShopping </Link>
                </h1>
            </div>
            <div>
                <ul className="header-links">
        
                    <li>
                    <Link to="/">Products</Link>
                    </li>
                    <li>
                    <Link to="/cart" className="cart">
                    <RiShoppingCart2Line />
                        Cart <span>{!cartItems.length ? "" : cartItems.length} </span>
                    </Link>
                    </li>
                </ul>
            </div>
    </header>
  )
}

export default Header