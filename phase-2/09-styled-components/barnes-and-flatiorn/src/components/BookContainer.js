import Genre from "./Genre";
import BookCard from "./BookCard";
import styled from "styled-components";

function BookContainer({ genresList, bookList, handleGenre}){

    return(
        <>

           <GenreContainer style={{display:"flex"}}>{genresList.map(genre => <Genre handleGenre={handleGenre} genreStr={genre} key={genre}/> )} 
           </GenreContainer>
           <BookList>
            {bookList.map(book => <BookCard  bookObj={book} key={book.title} />)}
            </BookList>
        </>
    )
}

export default BookContainer; 

const BookList = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
    div:hover{
        width:310px;
        height:260px;
    }
`

const GenreContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    background-color:#e9ede8;
    div{
        border-right: 1px solid;
        padding-left: 2em;
        padding-right: 2em;
    }
    div:last-child{
        border:none;
    }
`