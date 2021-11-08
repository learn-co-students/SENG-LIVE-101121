import Genre from "./Genre";
import BookCard from "./BookCard"
function BookContainer({populateForm, genresList, bookList, handleGenre}){

    return(
        <>
           <div style={{display:"flex"}}>{genresList.map(genre => <Genre handleGenre={handleGenre} genreStr={genre} key={genre}/> )} 
           </div>
            {bookList.map(book => <BookCard populateForm={populateForm} bookObj={book} key={book.title} />)}
        </>
    )
}

export default BookContainer