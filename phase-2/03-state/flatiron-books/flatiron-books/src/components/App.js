
import Header from "./Header";
import BookContainer from "./BookContainer";
import Form from "./Form"

import {books, genres} from '../data/books'

function App() {

  return (
    <div>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code"/>
      <Form/>
      <BookContainer bookList={books} genresList={genres} />
 

    </div>
  );
}

export default App;
