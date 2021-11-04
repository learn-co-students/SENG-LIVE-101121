function BookCard(props){
    return(
        <>
            <h1>{props.bookObj.title}</h1>
            <h3>{props.bookObj.author}</h3>
            <p>{props.bookObj.genre}</p>
            <p>{props.bookObj.price}</p>
        </>
    )
}

export default BookCard