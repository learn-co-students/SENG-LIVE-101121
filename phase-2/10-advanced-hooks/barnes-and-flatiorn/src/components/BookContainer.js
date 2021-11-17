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
    flex-wrap:wrap;
    justify-content:space-around;
    background: #f7f7f5;
    h3{
        font-family:${props => props.theme.font.primary};
    }
    div:hover{
        width:310px;
        height:210px;
    }
`


const GenreContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
    color:#e9ede8;
    border-top: 2px solid grey;
    max-width: 1500px;
    margin:auto;
    background: #899985;
    div{
        border-right: 1px solid #e9ede8;
        padding-left: 2em;
        padding-right: 2em;
    }
    div:last-child{
        border:none;
    }

`