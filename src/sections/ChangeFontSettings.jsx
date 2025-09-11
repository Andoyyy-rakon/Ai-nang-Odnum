import { useEffect, useState } from "react"
const ChangeFontSettings = () => {

    const AVAILABLE_FONTS = [ "font-Outfit", "font-sans", "font-serif", "font-mono"];
    
    const [font,setfont]=useState(localStorage.getItem("font")||"font-outfit")
    console.log(font)

    useEffect(()=>{
        const root = document.documentElement;

        AVAILABLE_FONTS.forEach((item)=>root.classList.remove(item))

        root.classList.add(font)

        localStorage.setItem("font",font)

    },[font])



  return (




    <div className="dark:bg-[#2A2A3B] flex items-center justify-between w-[90%] mt-5   px-4 py-3 rounded-full bg-slate-300 transition-all duration-300 ease-in-out">

        <label htmlFor="fontSelection">
        
          <h1 className="text-lg font-medium"> Font Settings</h1>
    

        </label>

        <select
        id="fontSelection"
        value={font}
        onChange={(e) => setfont(e.target.value)}
        className="border-[#2D2D2D] border-b-2 focus:outline-none bg-transparent "
        >
        <option  value="font-outfit">Outfit</option>
        <option value="font-sans">System Sans</option>
        <option value="font-serif">Serif</option>
        <option value="font-mono">Monospace</option>
      </select>

    </div>



    
  )
}

export default ChangeFontSettings