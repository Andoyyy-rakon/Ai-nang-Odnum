import Main from "./sections/Main"
import Sidebar from "./sections/Sidebar"
import { useEffect, useState } from "react"
import { Usercontext } from "./usercontext/Usercontext"
import { Route,Routes } from "react-router-dom"
import Activity from "./sections/Activity"


export default function App() {

  const [result,setresult] = useState(false)
  const [history,sethistory] = useState([])
  const [promt,setpromt] = useState("")
  const [messsage,setmessage] = useState([])
  const [darkmode,setdarkmode] = useState(false)
  
  useEffect(()=>{
    document.documentElement.classList.toggle("dark",darkmode);
  },[darkmode])
  

  

  const additem = (item)=>{
    sethistory(prev=>{
      let recentarray = [item,...prev]

      const finalarray = recentarray.filter((value,index)=>{
        return recentarray.findIndex(obj=>obj.content === value.content)===index;
      })

      return finalarray

    })
  }
  


  return (


      <Usercontext.Provider value={{result,setresult, additem,history,messsage,setmessage,sethistory,darkmode,setdarkmode}}>
        <Routes>
          <Route 
            path="/"
           element={ 
              <section className="min-h-screen flex">
                <Sidebar setpromt={setpromt} />
                <Main promt={promt} />
              </section>
           }
          > 
          </Route>

          <Route 
           path="/Activity"
           element={
            <Activity/>
           }
          >
          </Route>
        </Routes>
      </Usercontext.Provider>

  )
}