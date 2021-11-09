import {useState, useEffect} from 'react'
function BookCard({bookObj:{title, author, genre, price}, bookObj, populateForm, addToCart, handleDelete}){
const [like, setLike] = useState(false)

useEffect(()=>{
    return () => {
        console.log(`${title} removed`)
    }
},[])

   const handleClick = () => {
      setLike(!like)
   }
    return(
        <>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p>{genre}</p>
            <p>{price}</p>
            <p onClick={handleClick}>{like?'♥':'♡'}</p>
            <button onClick={() => populateForm(bookObj)}>Edit</button>
            <button onClick={() => addToCart(bookObj)}>Add To Cart</button>
            <button onClick={() => handleDelete(bookObj)} >Delete</button>
        </>
    )
}

export default BookCard