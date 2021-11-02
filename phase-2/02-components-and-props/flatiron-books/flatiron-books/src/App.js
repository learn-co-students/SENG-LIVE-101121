import BookCard from "./BookCard";
//TODO: Create a components folder
//TODO: Create Header, Form, Genre and BookContainer components
//TODO: Dynamically render BookCard in BookContainer using data from books.js
function App() {
  console.log('hi from app')
  return (
    <div>
      <BookCard title="Eloquent JavaScript"/>
      <BookCard title="JavaScript: The Definitive Guide"/>
      <BookCard title="JavaScript: The Good Parts"/>
    </div>
  );
}

export default App;
