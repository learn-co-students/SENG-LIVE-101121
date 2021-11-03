import Genre from "./Genre";
import BookCard from "./BookCard"
function BookContainer(props){
    return(
        <>
           <div style={{display:"flex"}}>{props.genresList.map(genre => <Genre genreStr={genre} key={genre}/> )} 
           </div>
            {props.bookList.map(book => <BookCard bookObj={book} key={book.title} />)}
        </>
    )
}

export default BookContainer