import { useState, useEffect } from "react";
import {Route, Switch, useHistory, Link} from 'react-router-dom'
import './style.css'

import Header from "./Header";
import BookContainer from "./BookContainer";
import Form from "./Form"
import Search from "./Search";
import BookDetail from "./BookDetail";
import styled, {ThemeProvider} from "styled-components";
import Cart from "./Cart";

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
        liked: false
    })
const [cart, setCart] = useState([])

const history = useHistory()


useEffect(()=> {
  fetch('http://localhost:4000/books')
  .then(res => res.json())
  .then(books => {
    setBookList(books)
    setAllBooks(books)
  })
  fetch('http://localhost:4000/genres')
  .then(res => res.json())
  .then(genres => setGenreList(genres))
},[])


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
  fetch('http://localhost:4000/books',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(book => {
    setBookList([book,...bookList])
  })
  
  setFormData({
    title:'',
    author:'',
    genre: '',
    image: '',
    price: '',
    liked: false
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
  history.push('/books')
}

const handleDelete = (bookObj) => {
  fetch(`http://localhost:4000/books/${bookObj.id}`,{
    method:'DELETE'
  })
  .then(() => {
    const filteredBooks = allBooks.filter(book => book.id !== bookObj.id)
    setBookList(filteredBooks)
    setAllBooks(filteredBooks)
    history.push('/books')
  })

}

const handleUpdateLike = (bookObj) => {
  fetch(`http://localhost:4000/books/${bookObj.id}`,{
    method:'PATCH',
    headers:{ 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({liked:!bookObj.liked})
  })
  .then(res => res.json())
  .then(data => {
    const tempBooks = allBooks.map(book => {
      if(book.id === data.id){
        return data
      } else {
        return book
      }
    })
    
    setAllBooks(tempBooks)
    setBookList(tempBooks)
  })
}

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <Link to="/cart"><h3>🛒 Cart: {cart.length} </h3></Link>
        <Header storeName="Barnes and Flatiron" slogan="Live Love Code"/>
        <Switch>

          <Route path="/books/new">
            <Form handleSubmit={handleSubmit} formData={formData} handleChange={handleChange}/>
          </Route>

          <Route path="/books/:id">
            <BookDetail handleUpdateLike={handleUpdateLike} handleDelete={handleDelete} addToCart={addToCart} populateForm={populateForm}/>
          </Route>
      
          <Route path="/books">
            <Search handleSearch={handleSearch}/>
            <BookContainer  handleGenre={handleGenre} bookList={bookList} genresList={genreList} />
          </Route>

          <Route path="/cart">
            <Cart cart={cart} setCart={setCart}/>
          </Route>


          <Route>
            <div>404</div>
          </Route>

        </Switch>
      </HeaderContainer>
    </ThemeProvider>
  );
}

export default App;

//Styled components theme
const theme = {
  font: {
    primary: "'Oswald', sans-serif",
    secondary: "Arial, sans-serif"
  },
  colors: {
    primary:"#f0efe6"
  }
}

//CSS styled component for header
const HeaderContainer = styled.div`
    text-align:center;
    background: ${props => props.theme.colors.primary}; 
    h1{
        font-family:${props => props.theme.font.primary}; 

    }

    h3{
        font-family:${props => props.theme.font.secondary}; 
        margin:inherit;
    }
    a{
      text-decoration: none;
    }
`

