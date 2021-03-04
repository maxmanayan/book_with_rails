import React from "react";


const Book = (props) => {
  const {title, author, id, deleteBook} = props
  
  return(
    <div>
      <h1>{title}</h1>
      <h2>by {author}</h2>
      <p>ID {id}</p>

      
      <button onClick={()=>deleteBook(id)}>delete</button>
      <p>update</p>
    </div>
  )
}


export default Book;