import React from "react";
import BookForm from "./BookForm";


const Book = (props) => {
  const {title, author, id, deleteBook, updateBook} = props
  
  return(
    <div className= 'style-box'>
      <div className="style-box-contents">
        <h1>"{title}"</h1>
        <h2>by {author}</h2>
        <p>ID {id}</p>

        <button onClick={()=> deleteBook(id)}>delete</button>
      </div>
     
      <div className="style-box-edit-form">
        <BookForm id={id} updateBook={updateBook} title={title} author={author}/>
      </div>
      
    </div>
  )
}


export default Book;
