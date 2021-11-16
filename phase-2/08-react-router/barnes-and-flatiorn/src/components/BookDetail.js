import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

function BookDetail({handleUpdateLike, populateForm, addToCart, handleDelete}){
    const [book, setBook] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)

    const bookId = useParams().id
    
    useEffect(()=>{
        fetch(`http://localhost:4000/books/${bookId}`)
        .then(res => res.json())
        .then(bookData => {
            setBook(bookData)
            setIsLoaded(true)
        })
    },[])

    if(!isLoaded) return <h2>Loading...</h2>
    const {title, author, price, genre, liked, image="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"} = book
    return(
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>${price}</p>
            <p>{genre}</p>
            <img src={image} />
            <p onClick={handleUpdateLike}>{liked?'♥':'♡'}</p>
            <button onClick={() => populateForm(book)}>Edit</button>
            <button onClick={() => addToCart(book)}>Add To Cart</button>
            <button onClick={() => handleDelete(book)} >Delete</button>
            <Link to="/books">Home</Link>
        </div>
    )
}

export default BookDetail