import React, {useState, useEffect} from "react";
import Books from "./Books";
import axios from "axios";



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


  return(
    <div>
      <h1>App Page</h1>
      <Books books={books} />
      
    </div>
  )
}



export default App;