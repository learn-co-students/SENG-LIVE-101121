import { useState } from "react";

import Header from "./Header";
import BookContainer from "./BookContainer";
import Form from "./Form"
import Search from "./Search";

import {books, genres} from '../data/books'

function App() {
const [bookList, setBookList] = useState(books)
const [genreList, setGenreList] = useState(genres)
const [formData, setFormData] = useState({
        title:'',
        author:'',
        genre: '',
        image: '',
        price: '',
        like: false
    })


const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }


const handleSearch = (e) => {
  const filteredBooks = books.filter(bookObj => bookObj.title.toLowerCase().includes(e.target.value.toLowerCase()))
  setBookList(filteredBooks)
}

const handleGenre = (genreStr) => {
  const filteredBooks = books.filter(bookObj => bookObj.genre.toLowerCase() === genreStr.toLowerCase())
  setBookList(filteredBooks)
}

const handleSubmit = (e) => {
  e.preventDefault()
  setBookList([formData,...bookList])
  setFormData({
    title:'',
    author:'',
    genre: '',
    image: '',
    price: '',
    like: false
})
}

const populateForm = (book) => {
  setFormData({
    title:book.title,
    author:book.author,
    genre: book.genre,
    image: book.image,
    price: book.price,
    like: false
})
}

  return (
    <div>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code"/>
      <Form handleSubmit={handleSubmit} formData={formData} handleChange={handleChange}/>
      <Search handleSearch={handleSearch}/>
      <BookContainer populateForm={populateForm} handleGenre={handleGenre} bookList={bookList} genresList={genreList} />
    </div>
  );
}

export default App;
