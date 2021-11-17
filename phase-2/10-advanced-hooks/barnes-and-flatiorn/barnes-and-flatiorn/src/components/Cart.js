
import {Link} from 'react-router-dom'
import {useRef} from 'react'
import BookCard from './BookCard'

function Cart({cart, setCart}){

  const prevCart = useRef(cart)
console.log(prevCart)
  const findAndRemoveItem = () => {
    const removed = prevCart.current.filter(item => !cart.includes(item))
    return <div style={{color:"red"}}>{removed[0].title} Removed from Cart</div>
  }

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
        {cart.length !== prevCart.current.length?findAndRemoveItem():null}
    </>
  )
}

export default Cart