import { createContext, useState } from "react";

//Context
const BookContext = createContext();

//Provider
function BookProvider({children}){
    const [allBooks, setAllBooks] = useState([])
    const [bookList, setBookList] = useState([])

    return <BookContext.Provider value={{allBooks, setAllBooks, bookList, setBookList}}>{children}</BookContext.Provider>
}

export {BookContext, BookProvider}