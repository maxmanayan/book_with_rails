import React, {useState} from "react";


const BookForm = (props) => {
  const {createBook} = props
  const [title, setTitle] = useState("")
  const [author,setAuthor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    createBook({title, author})
  }

  return(
    <div className='comics-read-container'>
      <h1>Enter Comics Read</h1>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>

        <p>Author</p>
        <input value={author} onChange={(e) => setAuthor(e.target.value)}/>

        <button type="submit">Add</button>
      </form>
    </div>
  )
}


export default BookForm;