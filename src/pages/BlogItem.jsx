import React, { useEffect, useState } from "react";
import FriedRice from "../assets/blogrice.jpg";
import EggImage from "../assets/blogegg.jpg";
import SteakImage from "../assets/blogsteak.jpg";
import FlavouredBun from "../assets/blogbun.jpg";
import EditDeleteButton from "../components/ui/EditDeleteButton";
import EditBlogItem from "../components/pagecomponents/editBlogsection/EditBlogItem";
import axios from "axios";
import { Link } from "react-router-dom";

function BlogItem() {
  const [datas, setdatas] = useState([]);
  const [editdata,seteditdata]=useState([]);
  const getdatas = () => {
    try {
      axios
        .get("http://localhost:3000/banners")
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

  const [click, setclick] = useState(false);
  const [deleteclick, setdeleteclick] = useState(null);

  const deletedatas = (id) => {
    console.log(id);
    try {
      axios
        .delete(`http://localhost:3000/banners/${id}`)
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
    <div className="">
      <table className=" border-gray-800 w-full text-center mx-2 my-4 h-[500px]">
        <thead className=" h-19  bg-gray-500 border-gray-800">
          <tr className="text-medium text-white font-semibold">
            <th className="">S:N</th>
            <th className="border">Image</th>
            <th className="border">Date</th>
            <th className="border">Name</th>
            <th className="border">Description</th>
            <th className="border">Likes</th>
            <th className="border">Comments</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody className="border">
          {datas.map((val, i) => {
            return (
              <tr key={i} className="border border-gray-800 ">
                <td className="p-6">{i + 1}</td>
                <td className="border capitalize border-gray-800  px-1 ">
                  {val.image}
                </td>
                <td className="border capitalize border-gray-800 ">
                  {val.title}
                </td>
                <td className="border capitalize border-gray-800  ">
                  {val.subtitle}
                </td>
                <td className="border capitalize border-gray-800  ">
                  {val.description}
                </td>
                <td className="border capitalize border-gray-800 p-8 ">
                  {val.like}
                </td>
                <td className="border capitalize border-gray-800  ">
                  {val.comments}
                </td>
                <td className=" w-[150px] h-full flex items-center justify-center mx-auto">
                  <Link to={`/view/${val.id}?id=${val.id} `} state={{id:val.id}}>
                                      <button type='submit' className='bg-gray-700 text-white rounded w-fit px-4 py-2 m-1 cursor-pointer' >
                                        View
                                        </button>
                                        </Link>
                  <button
                    type="submit"
                    className="cursor-pointer bg-gray-600 m-1 w-fit h-10 rounded text-white px-4 py-2"
                    onClick={() => {
                      setclick(true);
                      seteditdata([val]);
                    }}
                  >
                    Edit
                  </button>
                  {click ? (
                    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#9f9f9c]/30 flex items-center">
                      <EditBlogItem
                      editdata={editdata}
                        cancel={() => {
                          setclick(false);
                        }}
                      />
                    </div>
                  ) : null}

                  <EditDeleteButton
                    deleteChange={() => {
                      deletedatas(val.id);
                    }}
                    click={deleteclick}
                    setdeleteclick={() => setdeleteclick(!deleteclick)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BlogItem;
