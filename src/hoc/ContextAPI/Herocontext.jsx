import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const Herocontext=createContext()
function HerocontextApi({children}) {
      const [datas, setdatas] = useState([]);
      const getdatas = () => {
        try {
          axios
            .get("http://localhost:3000/category")
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
    //   for delete 
    //  const [deleteclick, setdeleteclick] = useState(null);

  const deletedatas = (id,setdeleteclick) => {
    console.log(id);
    try {
      axios
        .delete(`http://localhost:3000/category/${id}`)
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
    <Herocontext.Provider value={{data:datas,deletedatas}}>
        {children}
    </Herocontext.Provider>
  )
}

export default HerocontextApi