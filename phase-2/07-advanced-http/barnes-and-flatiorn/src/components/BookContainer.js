import Genre from "./Genre";
import BookCard from "./BookCard"
function BookContainer({populateForm, genresList, bookList, handleGenre, addToCart, handleDelete}){

    return(
        <>
           <div style={{display:"flex"}}>{genresList.map(genre => <Genre handleGenre={handleGenre} genreStr={genre} key={genre}/> )} 
           </div>
            {bookList.map(book => <BookCard handleDelete={handleDelete} addToCart={addToCart} populateForm={populateForm} bookObj={book} key={book.title} />)}
        </>
    )
}

export default BookContainer