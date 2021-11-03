function BookCard({bookObj:{title, author, genre="fiction", price=10}}){
    return(
        <>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p>{genre}</p>
            <p>{price}</p>
        </>
    )
}

export default BookCard