function BookCard({handleUpdateLike, bookObj:{title, author, genre, price, liked}, bookObj, populateForm, addToCart, handleDelete}){
   const handleClick = () => {
    handleUpdateLike(bookObj)
   }
    return(
        <>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p>{genre}</p>
            <p>{price}</p>
            <p onClick={handleClick}>{liked?'♥':'♡'}</p>
            <button onClick={() => populateForm(bookObj)}>Edit</button>
            <button onClick={() => addToCart(bookObj)}>Add To Cart</button>
            <button onClick={() => handleDelete(bookObj)} >Delete</button>
        </>
    )
}

export default BookCard