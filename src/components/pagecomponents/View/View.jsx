import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


function View() {
   const location= useLocation();
   const navigate=useNavigate()
  console.log(location,navigate);
  
  const linkPth=location.pathname.split(`/`);
  console.log(linkPth[2]);
   const [datas, setdatas] = useState([]);
  const getdatas = (i) => {
    console.log(i);
    try {
      axios
        .get(`http://localhost:3000/blogcard/${i}`)
        .then((result) => {
          console.log(result.data);
          setdatas([result.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {

    getdatas(linkPth[2]);
  }, []);
  
 
  return (
    <div>
      <div onClick={()=>{
        navigate(-1)
      }}>go back</div>
    </div>
  )
}

export default View