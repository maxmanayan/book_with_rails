import React, {useState, useEffect} from "react";
import Books from "./Books";
import axios from "axios";
import BookForm from "./BookForm";
import Book from "./Book";



const App = () => {
  const [books, setBooks] = useState([])

  const getBooks = async () =>{
    try {
      let res = await axios.get("/books")
      console.log(res)
      setBooks(res.data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getBooks()
  },[])


  const createBook = async (newBook) => {
    try {
      let res = await axios.post("/books", {...newBook})

      console.log(res.data)
      setBooks([res.data,...books])
    } catch(err) {
      console.log(err)
    }
  }


  const deleteBook = async (id) => {
    try {
      let res = await axios.delete(`/books/${id}`)

      let filteredBooks = books.filter(book => book.id !== id)

      setBooks(filteredBooks)
    } catch(err){
      console.log(err)
    }
    
  }

  const updateBook = async (editedBook, id) => {
    try {
      console.log("in updateBook function")
      console.log(editedBook, id)
      let res = await axios.put(`/books/${id}`, editedBook)
      console.log(res.data)
      let updateBookList = books.map(book => book.id !== id ? book : res.data)
      setBooks (updateBookList)
      console.log(books)
      console.log("finished editing book")
    } catch(err) {
      console.log(err)
    }
  }

  return(
    <div>
      <h1>Comic Book List </h1>
      <BookForm createBook={createBook}/>
      <Books books={books} deleteBook={deleteBook} updateBook={updateBook}/>
      
    </div>
  )
}



// module.exports=App
export default App;