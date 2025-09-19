import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const ChangeFontSettings = () => {

    const [Expand,isExpand] = useState(false)




      const AVAILABLE_FONTS = [
    { value: "font-outfit", label: "Outfit" },
    { value: "font-sans", label: " Sans" },
    { value: "font-serif", label: "Serif" },
    { value: "font-mono", label: "Monospace" },
  ];


    const [font,setfont]=useState(localStorage.getItem("font")||"font-outfit")
    const [open,isopen] = useState(false)

    const handleChange = (font)=>{
      setfont(font)
      isExpand(prev=>!prev)
      isopen(prev=>!prev)
      console.log("clicl")
    }

    useEffect(()=>{
        const root = document.documentElement;
        AVAILABLE_FONTS.forEach((item)=>root.classList.remove(item.value))
        root.classList.add(font)
        localStorage.setItem("font",font)

    },[font])
  return (
    <div className="dark:bg-[#2A2A3B] flex items-center justify-between w-[90%] mt-5   px-4 py-3 rounded-full bg-slate-300 transition-all duration-300 ease-in-out">
      <h1 className="text-lg font-medium dark:text-[#E0E0E0] ">Font Settings</h1>

      <div className="relative flex items-center justify-evenly ">
        <button onClick={()=>{
          isopen(prev=>!prev)
          isExpand(prev=>!prev)
        
        }} className={`min-w-[120px] py-[3px] ${open?" bg-gray-500":" bg-gray-400"} transition-all duration-300  rounded-2xl relative flex justify-center items-center pr-7 pl-2 `}>
          {AVAILABLE_FONTS.find(e=>e.value===font)?.label}
          <FontAwesomeIcon icon="dark:text-[#E0E0E0] fa-solid fa-caret-down" className={`dark:text-[#E0E0E0] absolute right-2 transition-all duration-300 text-lg cursor-pointer ${Expand?"":"-rotate-90"}`}  />
          
        </button>

        {open&&
        <div className="mt-2 rounded-lg absolute w-full bg-slate-400 flex justify-center py-2 top-7 transition-all  " >
          <div>
          <ul >
            {AVAILABLE_FONTS.map((item)=>(
              <li onClick={()=>handleChange(item.value)} className={` cursor-pointer ${font===item.value?"bg-gray-500":""} px-3 rounded-full`}>
                {item.label}
              </li>
            ))}

          </ul>

          </div>

        </div>
        
        
        }

      </div>

    </div>


    
  )
}

export default ChangeFontSettings