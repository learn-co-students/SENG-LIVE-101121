import { useState, useEffect } from "react";

import Header from "./Header";
import BookContainer from "./BookContainer";
import Form from "./Form"
import Search from "./Search";



function App() {
const [allBooks, setAllBooks] = useState([])
const [bookList, setBookList] = useState([])
const [genreList, setGenreList] = useState([])
const [formData, setFormData] = useState({
        title:'',
        author:'',
        genre: '',
        image: '',
        price: '',
        like: false
    })
const [cart, setCart] = useState([])


useEffect(()=> {
  fetch('http://localhost:4000/books')
  .then(res => res.json())
  .then(books => {
    setBookList(books)
    setAllBooks(books)
  })
},[])

useEffect(()=>{
  fetch('http://localhost:4000/genres')
  .then(res => res.json())
  .then(genres => setGenreList(genres))
},[])

useEffect(() => {
  if(cart.length > 0) alert(`${cart[cart.length-1].title} added to cart`)
},[cart])



const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }


const handleSearch = (e) => {
  const filteredBooks = allBooks.filter(bookObj => bookObj.title.toLowerCase().includes(e.target.value.toLowerCase()))
  setBookList(filteredBooks)
}

const handleGenre = (genreStr) => {
  const filteredBooks = allBooks.filter(bookObj => bookObj.genre.toLowerCase() === genreStr.toLowerCase())
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

const addToCart = (book) => {
  setCart([...cart, book])
}

const handleDelete = (bookObj) => {
  const filteredBooks = allBooks.filter(book => book.id !== bookObj.id)
  setBookList(filteredBooks)
  setAllBooks(filteredBooks)

}

  return (
    <div>
      <h3>Cart: {cart.length} </h3>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code"/>
      <Form handleSubmit={handleSubmit} formData={formData} handleChange={handleChange}/>
      <Search handleSearch={handleSearch}/>
      <BookContainer handleDelete={handleDelete} addToCart={addToCart} populateForm={populateForm} handleGenre={handleGenre} bookList={bookList} genresList={genreList} />
    </div>
  );
}

export default App;
