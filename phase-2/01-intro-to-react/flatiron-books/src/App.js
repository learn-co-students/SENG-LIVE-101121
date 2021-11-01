import BookCard from "./BookCard";

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
