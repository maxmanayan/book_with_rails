import React from "react";
import Book from "./Book";


const Books = (props) => {
  const {books, deleteBook} = props

  const renderBooks = () => {
    return books.map(book => <Book key={book.id} {...book} deleteBook={deleteBook}/>)
  }

  return(
    <div>
      <h1>Comics Read</h1>
      {renderBooks()}
    </div>
  )
}


export default Books;