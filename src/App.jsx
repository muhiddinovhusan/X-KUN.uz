import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import News from "./components/News"
import NewsDetails from "./components/NewsDetails"
import Home from "./components/Home"

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
   <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/news" element={<News/>}/>
    <Route path="/news/:id" element={<NewsDetails/>}/>
    
    </Routes> 
    </BrowserRouter>
  
    
  )
}

export default App