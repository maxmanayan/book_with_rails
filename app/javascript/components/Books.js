import React from "react";
import Book from "./Book";


const Books = (props) => {
  const {books} = props

  const renderBooks = () => {
    return books.map(book => <Book key={book.id} {...book}/>)
  }

  return(
    <div>
      <h1>Books Page Here</h1>
      {renderBooks()}
    </div>
  )
}


export default Books;