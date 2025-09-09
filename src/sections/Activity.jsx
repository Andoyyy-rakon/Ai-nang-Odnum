import { assets } from "../assets/assets"
import { Usercontext } from "../usercontext/Usercontext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


//Update
const Activity = () => {

  const navigate = useNavigate()

  const {history,sethistory} = useContext(Usercontext) 


  
  const deleteActivity = (itemIndex)=>{
    sethistory(
      (prev)=>prev.filter((__,index)=>index!==itemIndex)
    )
  }



  return (
    <div className='dark:bg-[#1A1A26] dark:bg-none min-h-screen w-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
from-[#52525b]
via-[#a1a1aa]
to-[#e4e4e7]
'>

  <div className='h-screen  max-xl:w-[80%]   w-[50%] m-auto relative'>
    <div className="w-[100%] border-b-2 dark:border-[#2A2A3B]  border-slate-950 pt-12">
      <div className="bg-black w-fit dark:bg-[#2A2A3B]  text-white p-2 text-[20px] font-medium te rounded-tr-2xl tracking-[0.12em]">Acitivity</div>
    </div>

    <p className="dark:text-[#E0E0E0] font-normal text-lg leading-normal "> Below is a record of your past conversations. You can review your activity at any time or remove items you no longer need.</p>

        {history.map((item,index)=>(
        <div key={item.content} className="dark:border-[#2A2A3B] pt-10 pb-2 px-3 border-b-2 border-black flex flex-col gap-2 ">
        <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={assets.AiNgOdnumLogo} alt="" className="w-7"/>
          <p className="dark:text-[#E0E0E0] font-normal text-slate-800">Ai ng odnum</p>
        </div>
          
          <div className="flex gap-7 items-center">
            <p className="dark:text-[#E0E0E0] tracking-normal text-sm font-bold text-slate-800">{item.date}</p>
            <FontAwesomeIcon icon="fa-solid fa-x" onClick={()=>deleteActivity(index)} className="dark:text-[#E0E0E0] cursor-pointer hover:scale-125 transition-all duration-300" />

          </div>
          
        </div>

        <div className="pl-9">
          <h1 className="dark:text-[#E0E0E0] text-[27px] max-md:text-[25px] font-semibold text-black mb-4">{item.content}</h1>
          <p className="dark:text-[#E0E0E0] tracking-widest text-sm font-bold text-slate-800">{item.time}</p>
        </div>


      </div>

        ))}
        

        <div className="text-3xl absolute right-0 mt-10 mr-5 cursor-pointer " onClick={()=>navigate("/")}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" className="dark:text-[#E0E0E0] hover:scale-125 duration-300 transition-all" />

        </div>


  </div>


    </div>
  )
}

export default Activity