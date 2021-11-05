import Genre from "./Genre";
import BookCard from "./BookCard"
function BookContainer({populateForm, genresList, bookList, handleGenre}){
    const buildGenreList = () => {
        const bookListG = bookList.map(book => book.genre.toUpperCase())
        const genres = genresList.map(genre => genre.toUpperCase())
        const joinList = [...genres, ...bookListG]
        return [...new Set(joinList)]
    }

    return(
        <>
           <div style={{display:"flex"}}>{buildGenreList().map(genre => <Genre handleGenre={handleGenre} genreStr={genre} key={genre}/> )} 
           </div>
            {bookList.map(book => <BookCard populateForm={populateForm} bookObj={book} key={book.title} />)}
        </>
    )
}

export default BookContainer