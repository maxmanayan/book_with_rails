import React from "react";
import BookForm from "./BookForm";


const Book = (props) => {
  const {title, author, id, deleteBook, updateBook} = props
  
  return(
    <div className= 'style-box'>
      <h1>TITLE: {title}</h1>
      <h2>AUTHOR {author}</h2>
      <p>ID {id}</p>

      <button onClick={()=> deleteBook(id)}>delete</button>
      <p>update</p>
      <BookForm id={id} updateBook={updateBook} title={title} author={author}/>
    </div>
  )
}


export default Book;
