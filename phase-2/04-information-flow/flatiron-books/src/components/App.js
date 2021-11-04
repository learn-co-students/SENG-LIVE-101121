import { useState } from "react";

import Header from "./Header";
import BookContainer from "./BookContainer";
import Form from "./Form"

import {books, genres} from '../data/books'

function App() {
const [bookList, setBookList] = useState(books)
const [genreList, setGenreList] = useState(genres)

  return (
    <div>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code"/>
      <Form/>
      <BookContainer bookList={bookList} genresList={genreList} />

    </div>
  );
}

export default App;
