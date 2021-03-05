import React, {useState} from "react";


const BookForm = (props) => {
  const {createBook, updateBook, id, author:writer, title:start} = props
  const [title, setTitle] = useState("")
  const [author,setAuthor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateBook({title, author}, id)
    } else {
      createBook({title, author})
    }

    
  }

  return(
    <div className='comics-read-container'>
      <h1>{id ? "edit book here" : "create book"}</h1>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>

        <p>Author</p>
        <input value={author} onChange={(e) => setAuthor(e.target.value)}/>

        <button type="submit">{id ? "edit" : "create"}</button>
      </form>
    </div>
  )
}


export default BookForm;