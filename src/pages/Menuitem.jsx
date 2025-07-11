import React, { useEffect, useState } from "react";
import EditDeleteButton from "../components/ui/EditDeleteButton";
import EditMenuSection from "../components/pagecomponents/editmenusection/EditMenuSection";
import axios from "axios";
import HerocontextApi, { Herocontext } from "../hoc/ContextAPI/Herocontext";
import { Link } from "react-router-dom";

function Menuitem() {
  const [click, setclick] = useState(false);
  const [editdata, seteditdata] = useState([]);

  const [deleteclick, setdeleteclick] = useState(null);

  // const deletedatas = (id) => {
  //   console.log(id);
  //   try {
  //     axios
  //       .delete(`http://localhost:3000/category/${id}`)
  //       .then((result) => {
  //         console.log(result.data);
  //         setdeleteclick(false);
  //         getdatas();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="">
      <HerocontextApi>
        <Herocontext.Consumer>
          {({ data, deletedatas }) => {
            console.log("ankita");
            return (
              <table className=" border-gray-800 w-11/12 text-center mx-auto my-4 h-[500px]">
                <thead className=" h-19  bg-gray-500 border-gray-800">
                  <tr className="text-xl text-white font-semibold">
                    <th className="">S:N</th>
                    <th className="border">Name</th>
                    <th className="border">Description</th>
                    <th className="border">price</th>
                    <th className="border">Action</th>
                  </tr>
                </thead>
                <tbody className="border">
                  {data.map((val, i) => {
                    return (
                      <tr key={i} className="border border-gray-800">
                        <td className="">{val.id}</td>
                        <td className="border capitalize border-gray-800 ">
                          {val.name}
                        </td>
                        <td className="border capitalize border-gray-800  w-4/12">
                          {val.description}
                        </td>
                        <td className="border capitalize border-gray-800 ">
                          {val.price}
                        </td>
                        <td className=" w-full h-full flex items-center justify-center">
                          <Link to={`/viewmenuitem/${val.id}?id=${val.id} `} state={{id:val.id}}>
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
                            {/* for editing the text/content */}
                          </button>
                          {click ? (
                            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#9f9f9c]/30 flex items-center">
                              <EditMenuSection
                                editdata={editdata}
                                cancel={() => {
                                  setclick(false);
                                }}
                              />
                            </div>
                          ) : null}

                          <EditDeleteButton
                            deleteChange={() => {
                              deletedatas(val.id, setdeleteclick);
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
            );
          }}
        </Herocontext.Consumer>
      </HerocontextApi>
    </div>
  );
}

export default Menuitem;
