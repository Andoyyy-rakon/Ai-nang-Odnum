import Main from "./sections/Main"
import Sidebar from "./sections/Sidebar"
import { useState } from "react"
import { Usercontext } from "./usercontext/Usercontext"


export default function App() {

  const [result,setresult] = useState(false)
  


  return (
    <section className="min-h-screen flex">

      <Usercontext.Provider value={{result,setresult}}>
          <Sidebar/>
          <Main/>
      </Usercontext.Provider>

    </section>

  )
}