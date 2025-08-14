import Main from "./sections/Main"
import Sidebar from "./sections/Sidebar"
import { useState } from "react"
import { Usercontext } from "./usercontext/Usercontext"


export default function App() {

  const [result,setresult] = useState(false)
  const [history,sethistory] = useState([])
  const [promt,setpromt] = useState("")
  



  const additem = (item)=>{
    sethistory(prev=>{
      let recentarray = [item,...prev]

      const finalarray = recentarray.filter((value,index)=>{
        return recentarray.indexOf(value)===index;
      })

      return finalarray

    })
  }
  


  return (
    <section className="min-h-screen flex">

      <Usercontext.Provider value={{result,setresult, additem,history}}>
          <Sidebar setpromt={setpromt} />
          <Main promt={promt}/>
      </Usercontext.Provider>

    </section>

  )
}