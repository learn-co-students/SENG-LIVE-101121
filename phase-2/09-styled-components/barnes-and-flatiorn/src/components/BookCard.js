import {Link} from 'react-router-dom';
function BookCard({ bookObj:{title, author, genre, price, liked}, bookObj}){

    return(
        <>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>{genre}</p>
            <p>{price}</p>
           <Link to={`/books/${bookObj.id}`}>Click for Details</Link>
        </>
    )
}

export default BookCard
