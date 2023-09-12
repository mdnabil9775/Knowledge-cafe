import Header from "./Component/Header/Header"
import Blogs from "./Component/Blogs/Blogs"
import BookMarks from "./Component/BookMarks/BookMarks"
import { useState } from "react"
function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const hanleAddBookMarks = blog =>{
    const newBookMark = [...bookmarks, blog];
    setBookMarks(newBookMark);
    
  }

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="flex gap-x-9 flex-col md:felx-row lg:flex-row">
        <Blogs hanleAddBookMarks={hanleAddBookMarks}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>
      
      
      
      
      
      
    </div>
  )
}

export default App
