
import {Link} from 'react-router-dom'
function Cart({cart, setCart}){

  //Removes an item from the cart
  const removeFromCart = (cartItem) => {
    const tempCart = cart.filter(item => item !== cartItem)
    setCart(tempCart)
  }
  
  return(  
    <>
        <Link to="/books">Back To Books</Link>
        {cart.map(item => <div>{item.title} : ${item.price}
        <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>)}
        <h1>Total:${cart.reduce((previousValue, currentValue) =>{return parseInt(previousValue) + currentValue.price},0)}</h1>
    
    </>
  )
}

export default Cart