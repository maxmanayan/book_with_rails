import React from "react";
import Book from "./Book";


const Books = (props) => {
  const {books, deleteBook, updateBook} = props

  const renderBooks = () => {
    return books.map(book => <Book key={book.id} {...book} deleteBook={deleteBook} updateBook={updateBook}/>)
  }

  return(
    <div className='comics-read'>
      <h1>Comics Read</h1>
      {renderBooks()}
    </div>
  )
}


export default Books;