import { useProducts } from "../context/ProductsProvider"

import "./cart.css"

const Cart = () => {

    const {cartItems, addProduct,clearCart, handleItemRemove} = useProducts();

    const totalPrice = cartItems.reduce((price,item) => price + item.qty * item.price, 0 )

  return (
    <div className="cart-items">
        <h2 className="cart-items-header">Cart Items</h2>

        <div className="clear-cart">
          {cartItems.length >= 1 && (
            <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
          ) }
        </div>

        {cartItems.length === 0 && (
            <div className="cart-items-empty">The cart is empty</div>
        )}

        <div>
            {cartItems.map(item => (
                <div key={item.id} className="cart-items-list">
                    <img src={item.image} alt={item.title}  className="cart-items-image"/>
                    <div className="cart-items-name">{item.title.slice(0,20)}</div>
                    <div className="cart-items-actions">
                        <button
                        onClick={() => addProduct(item)}
                         className="item-add">
                            +
                        </button>
                        <button 
                         onClick={() => handleItemRemove(item)}
                        className="item-remove">
                            -
                        </button>
                        {item.qty} *  
                   </div>
                   <div className="cart-items-price"> ${item.price} </div>
                                   
                </div>
                
            ))}
        </div>
     
        <div className="cart-items-total-price">
                
              <div className="total-price">
                Total Price: ${Math.ceil(totalPrice)}
               </div>
     </div>

    </div>
  )
}

export default Cart