import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function BookDetail({handleUpdateLike, populateForm, addToCart, handleDelete}){
    const bookId = useParams().id
    const {content, isLoaded} = useFetch( `http://localhost:4000/books/${bookId}`)

    

    if(!isLoaded) return <h2>Loading...</h2>
    const {title, author, price, genre, liked, image="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"} = content
    return(
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>${price}</p>
            <p>{genre}</p>
            <img src={image} />
            <p onClick={handleUpdateLike}>{liked?'♥':'♡'}</p>
            <button onClick={() => populateForm(content)}>Edit</button>
            <button onClick={() => addToCart(content)}>Add To Cart</button>
            <button onClick={() => handleDelete(content)} >Delete</button>
            <Link to="/books">Home</Link>
        </div>
    )
}

export default BookDetail