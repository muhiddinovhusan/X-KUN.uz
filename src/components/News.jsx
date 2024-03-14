import  { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader';
import Error from './Error';
import { Link } from 'react-router-dom';

const News = () => {
    const [news, setNews] = useState([])
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);
    const [page,setPage]= useState(1)
    const [filteredNews, setFilteredNews] = useState(news);
    const fetchNews = async ()=>{
        setLoading(true);
   try {
const res = await axios.get(`http://localhost:3000/news?_page=${page}&_per_page=6`);
const data = await res.data.data;
setNews(data)
   } catch (error) {
    setError(error.message)
   }finally{
    setLoading(false);
   }
}
    useEffect(()=>{
fetchNews();

    },[page])

    useEffect(()=>{
        setFilteredNews(news) 
    },[news]);


    const handleChange =(type)=>{
        if(type === "prev"){
            setPage(page - 1)
        }else {
            setPage(page + 1)
        }
    }
    const hasPrev = Boolean(page > 1)


    const handleNewsSearch = (e) => {
        const text = e.target.value.trim().toLowerCase();
        setFilteredNews(
          news.filter(
            (product) =>
              product.title.toLowerCase().includes(text) ||
              product.description.toLowerCase().includes(text)           )
        );
      };

  return (
    <div className='container min-vh-100  py-5 '>
        <div  className='d-flex align-items-center justify-content-between mb-3'>
        <h1 className=''>Yangiliklar</h1>
       
        
   <input type="text" placeholder='Search' onChange={handleNewsSearch} className='form-control w-25' />  
        </div>
 
    <div className='d-flex gap-5 flex-wrap justify-content-center justify-content-sm-center  '>
 
{
    loading && (<Loader/>) 
}
{
      error && (<Error />)
}
{
    filteredNews.length  > 0 && filteredNews.map((nnews)=>
    (
        <div key={nnews.id} className="card" style={{width: "18rem", height:"20rem"}}>
         
    <img src={nnews.img} className="card-img-top h-50 object-fit-cover" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-truncate">{nnews.title}</h5>
      <p className="card-text text-truncate">{nnews.description}</p>
     <Link to={`/news/${nnews.id}`}  className='text-decoration-none btn btn-primary btn-outline-dark border border-primary offset-4 my-3 text-white' >Batafsil</Link>
    </div>
  </div>
   )
    )
}
      
        
            
      
    </div>
    <div className='d-flex offset-1  gap-2 align-items-center justify-content-sm-center'>
           <button disabled={!hasPrev} className='btn btn-success' onClick={()=>handleChange("prev")}>prev</button>
           <p className='fs-3'>{page}</p>
           <button className='btn btn-info' onClick={()=>handleChange("next")}>next</button>
           </div>
        </div>
  )
}

export default News
