import React from "react";


const Book = (props) => {
  const {title, author, id, deleteBook} = props
  
  return(
    <div className= 'style-box'>
      <h1>TITLE: {title}</h1>
      <h2>AUTHOR {author}</h2>
      <p>ID {id}</p>

      <button onClick={()=> deleteBook(id)}>delete</button>
      <p>update</p>
    </div>
  )
}


export default Book;
