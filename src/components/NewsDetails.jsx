import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Error from "./Error";
import Loader from "./Loader";

const NewsDetails = () => {
    const [news, setNews] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);
   const {id}= useParams();

    const fetchNew = async ()=>{
        setLoading(true);
   try {
const res = await axios.get(`http://localhost:3000/news?id=${id}`);
const data = await res?.data;
console.log(data);
setNews(data)
   } catch (error) {
    setError(error.message)
   }finally{
    setLoading(false);
   }
}
    useEffect(()=>{
fetchNew(id);
    
    },[id])
  return (
(
    <div className='container min-vh-100  py-5  '>
        <Link to="/news" className="btn btn-primary"> back</Link>
    <h1 className=''>Batafsil</h1>
  
 {
     loading && (<Loader/>) 
 }
 {
       error && (<Error />)
 }

<div>
  
{
    news.map((neww,i)=>(
    
        <div className="d-flex " key={i}>
            
            <div className="flex-1">
            <img src={neww.img} alt="" />
            </div>
<div className="flex-1 py-2  me-2 ">
    <h4 className="p-4">{neww.title}</h4>
<h5 className=" mt-3 p-4 ">{neww.description}</h5>
</div>
        </div>
       
    ))
}
</div>
       
         
             
       


         </div>
)
  )
}

export default NewsDetails