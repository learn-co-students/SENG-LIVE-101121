import { useState } from "react";

import Header from "./Header";
import BookContainer from "./BookContainer";
import Form from "./Form"
import Search from "./Search";

import {books, genres} from '../data/books'

function App() {
const [bookList, setBookList] = useState(books)
const [genreList, setGenreList] = useState(genres)


const handleSearch = (e) => {
  console.log(e.target.value)
  const filteredBooks = books.filter(bookObj => bookObj.title.toLowerCase().includes(e.target.value.toLowerCase()))
  setBookList(filteredBooks)
}

const handleGenre = (genreStr) => {
  const filteredBooks = books.filter(bookObj => bookObj.genre.toLowerCase() === genreStr.toLowerCase())
  setBookList(filteredBooks)
}

  return (
    <div>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code"/>
      <Form/>
      <Search handleSearch={handleSearch}/>
      <BookContainer handleGenre={handleGenre} bookList={bookList} genresList={genreList} />
    </div>
  );
}

export default App;
