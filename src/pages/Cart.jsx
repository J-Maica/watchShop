import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function Cart() {
    const { AllProducts, cartItem, addToCart, removeToCart, totalCartAmount } =
    useContext(ShopContext);
  return (
    <div className='mt-4 container px-lg-5 rounded-3 border shadow-lg d-grid gap-5 text-white py-5'>
    {totalCartAmount() === 0 ? <h1 className="text-white text-center">Empty Cart</h1> : (
       <div>
       <table className="table table-dark table-striped mt-5 text-white">
         <thead>
           <tr>
             <th scope="col">Product image</th>
             <th scope="col">Name</th>
             <th scope="col">Price</th>
             <th scope="col">Quantity</th>
             <th scope="col">Total</th>
           </tr>
         </thead>
         <tbody className="bg-secondaryBrown text-primaryBrown">
           {AllProducts.map((product, key) => {
             if (cartItem[product.id] > 0) {
               return (
                 <tr key={key}>
                   <td>
                     <img src={product.image} alt="" className="w-75" style={{maxWidth:"150px", height:"auto"}}/>
                   </td>
                   <td>{product.name}</td>
                   <td>₱{product.price}</td>
                   <td>
                     <div className="d-flex align-items-center">
                       <i
                         className="fa-solid fa-minus cursor-pointer"
                         onClick={() => removeToCart(product.id)}
                       ></i>
                       <span className="mx-2">{cartItem[product.id]}</span>
                       <i
                         className="fa-solid fa-plus cursor-pointer"
                         onClick={() => addToCart(product.id)}
                       ></i>
                     </div>
                   </td>
                   <td>₱{product.price * cartItem[product.id]}</td>
                 </tr>
               );
             }
             return null;
           })}
         </tbody>
         <tfoot>
           <tr>
             <td colSpan="3"></td>
             <td className="fw-bold fs-4">Total:</td>
             <td className="fw-bold fs-4">₱{totalCartAmount()}</td>
           </tr>
         </tfoot>
       </table>
 
       {/* action btns*/}
       <div className="d-grid d-md-flex gap-2 mt-5">
         <NavLink to={"/products"} className={"btn btn-light"}>
           Continue Shopping
         </NavLink>
         <button className="btn btn-light">Proceed To Checkout</button>
       </div>
       </div>
    )}

   
  </div>
  )
}

export default Cart