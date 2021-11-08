import {useState} from 'react'
function BookCard({bookObj:{title, author, genre, price}, bookObj, populateForm}){
    const [like, setLike] = useState(false)


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
        </>
    )
}

export default BookCard