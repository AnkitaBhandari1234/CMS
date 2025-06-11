// import Sociallife from '../assets/sociallife.jpg'
// import PoliticsPerson from '../assets/politics.jpg'
// import FoodImage from '../assets/food.jpg'
import EditDeleteButton from '../components/ui/EditDeleteButton';
import { useEffect, useState } from 'react';
import EditBlogcard from '../components/pagecomponents/editBlogsection/EditBlogcard';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Blogcard() {
  const [click,setclick]=useState(false);
 const [editdata,seteditdata]=useState([]);
       const [datas, setdatas] = useState([]);
  const getdatas = () => {
    try {
      axios
        .get("http://localhost:3000/blogcard")
        .then((result) => {
          console.log(result.data);
          setdatas([...result.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdatas();
  }, []);

  const [deleteclick, setdeleteclick] = useState(null);
  const deletedatas = (id) => {
    console.log(id);
    try {
      axios
        .delete(`http://localhost:3000/blogcard/${id}` )
        .then((result) => {
          console.log(result.data);
          setdeleteclick(false);
          getdatas();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=''>
      <table  className=" border-gray-800 w-11/12 text-center mx-auto my-4 h-[500px]">
        <thead className=" h-19  bg-gray-500 border-gray-800">
          <tr className="text-xl text-white font-semibold">
            <th className="">S:N</th>
            <th className="border">Image</th>
            <th className="border">Name</th>
            <th className="border">Description</th>
            
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody className="border">
          {datas.map((val, i) => {
            return (
              <tr key={i} className="border border-gray-800">
                <td className="">{val.id}</td>
                <td className="border capitalize border-gray-800  w-3/12">{val.image}</td>
                <td className="border capitalize border-gray-800 w-2/12 ">{val.name}</td>
                <td className="border capitalize border-gray-800  w-3/12 px-2">{val.description}</td>
               
                <td className=" w-full h-full  flex items-center justify-center">
                   <Link to={`/view/${val.id}?id=${val.id} `} state={{id:val.id}}>
                                      <button type='submit' className='bg-gray-700 text-white rounded w-fit px-4 py-2 m-1 cursor-pointer' >
                                        View
                                        </button>
                                        </Link>
                       <button type="submit" className="cursor-pointer bg-gray-600 m-1 w-fit h-10 rounded text-white px-4 py-2   " onClick={()=>{
                    setclick(true)
                    seteditdata([val])
                  }} >Edit</button>
                  {
                    click?<div className='fixed top-0 left-0 right-0 bottom-0 bg-[#9f9f9c]/20 flex items-center'>
                      <EditBlogcard editdata={editdata} cancel={()=>{setclick(false)}}/>
                    </div>:null
                  }
            
                  <EditDeleteButton
                  deleteChange={()=>{deletedatas(val.id)}}
                  click={deleteclick} setdeleteclick={()=>setdeleteclick(!deleteclick)}/>
                  </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Blogcard