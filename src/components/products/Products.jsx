import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsProvider"
import "./products.css"


const Products = () => {

  /*useContext*/
  const { addProduct} = useProducts();
  const [products, setProducts] = useState([]);

     /*FETCH PRODUCTS*/
   
     useEffect(() => {
      const fetchProducts = async () => {
          try {
              const res = await fetch("https://fakestoreapi.com/products");
              const data = await res.json()
  
             setProducts(data)
          } catch (error) {
              console.log(error);
          }
      }

      fetchProducts();
  }, [products]);

  
  return (

    <div className="products">
      
        {products.map(product => (
            <div key={product.id} className="card">
              <div className="">
                 <img src={product.image} alt={product.title} className="product-img"/>
              </div>
              <div className="product-title">
                <h3>{product.title.slice(0,23)}..</h3>
              </div>
              <div className="product-price">
                ${product.price}
              </div>

              <div >
                <button 
                onClick={() => addProduct(product) }
                className="btn-add">
                  Add to Cart
                </button>
              </div>

            </div>
        ))}
    </div>
  )
}

export default Products