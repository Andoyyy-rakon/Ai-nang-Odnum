import { useEffect, useState } from "react"
const ChangeFontSettings = () => {

      const AVAILABLE_FONTS = [
    { value: "font-outfit", label: "Outfit" },
    { value: "font-sans", label: "System Sans" },
    { value: "font-serif", label: "Serif" },
    { value: "font-mono", label: "Monospace" },
  ];


    const [font,setfont]=useState(localStorage.getItem("font")||"font-outfit")
    const [open,isopen] = useState(false)

    useEffect(()=>{
        const root = document.documentElement;
        AVAILABLE_FONTS.forEach((item)=>root.classList.remove(item.value))
        root.classList.add(font)
        localStorage.setItem("font",font)

    },[font])
  return (
    <div className="dark:bg-[#2A2A3B] flex items-center justify-between w-[90%] mt-5   px-4 py-3 rounded-full bg-slate-300 transition-all duration-300 ease-in-out">
      <h1 className="text-lg font-medium">Font Settings</h1>

      <div className="relative">
        <button onClick={()=>isopen(prev=>!prev)} className="min-w-[120px] py-[3px] bg-slate-500 rounded-2xl ">
          {AVAILABLE_FONTS.find(e=>e.value===font)?.label}
        </button>

        {open&&
        <div className="mt-2 rounded-lg absolute w-full bg-slate-400 flex justify-center py-2">
          <div>
          <ul >
            <li>AAAAAA</li>
            <li>AAAAAA</li>
            <li>AAAAAA</li>
            <li>AAAAAA</li>
          </ul>

          </div>

        </div>
        
        
        }

      </div>

    </div>


    
  )
}

export default ChangeFontSettings