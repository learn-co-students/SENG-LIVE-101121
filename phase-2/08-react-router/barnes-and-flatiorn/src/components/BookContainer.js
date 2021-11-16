import Genre from "./Genre";
import BookCard from "./BookCard"
function BookContainer({ genresList, bookList, handleGenre}){

    return(
        <>
           <div style={{display:"flex"}}>{genresList.map(genre => <Genre handleGenre={handleGenre} genreStr={genre} key={genre}/> )} 
           </div>
            {bookList.map(book => <BookCard  bookObj={book} key={book.title} />)}
        </>
    )
}

export default BookContainer