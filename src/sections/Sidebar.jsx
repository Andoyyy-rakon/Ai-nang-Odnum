import { assets } from "../assets/assets"
import { useState } from "react"
const Sidebar = () => {


    const [toggle,settogle] =useState(false)
    const [mobile,setmobile] = useState(false)
    const [animate , setanimate] = useState(true)


    const shrink = ()=>{
        settogle((prev)=>!prev)
    }


    const mobileShrink = ()=>{
        setmobile(prev=>!prev)
        setanimate(animate=>!animate)
        setTimeout(() => {
            set(animate=>!animate)
        }, 3000);
        
    }



  return (

    <>
        <div className={`md:hidden absolute z-10 px-[31px] py-[24px]  transition-opacity  ${animate ? "opacity-100" :"opacity-0"}`}>
            <img src={assets.menu_icon} alt="" width={32}  onClick={mobileShrink}/>
        </div>

        <div className={`min-h-screen inline-flex flex-col bg-gray-300 px-7 py-5  justify-between fixed ${mobile ? "translate-x-0" : "-translate-x-full"}  transition-transform duration-300  md:static md:translate-x-0 `} >
        <div className="flex flex-col gap-6">
            <img src={assets.menu_icon} alt="" width={40} className="p-1 cursor-pointer" onClick={shrink}/>
            <div className="flex justify-center items-center gap-3 px-4 py-3 rounded-full  bg-gray-400 cursor-pointer ">
                <img src={assets.plus_icon} alt="" width={20} />
                {!toggle && <h3> New Chat</h3>}
                
            </div>

            {!toggle && <div className="flex flex-col gap-2">
                <p className="font-bold font">Recent</p>
                <div   className="flex justify-center items-center gap-1 mt-3 cursor-pointer hover:bg-gray-400 py-1 px-5 rounded-3xl transition-all duration-300">
                    <img src={assets.message_icon} alt="" width={30}/>
                    <p>What a world</p>
                    
                </div>
                
            </div>}

        </div>

        <div className="space-y-3 mt-5">
            <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl">
                <img src={assets.question_icon} alt="" width={25} height={25} />
                {!toggle && <p>Help</p>}
                
            </div>

            <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl ">
                <img src={assets.history_icon} alt="" width={25} height={25} />
                {!toggle && <p>Activity</p>}
                
            </div>


            <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl">
                <img src={assets.setting_icon} alt="" width={25} height={25} />
                {!toggle && <p>Setting</p>}
                
            </div>


        </div>

    </div>
    
    
    </>


  )
}

export default Sidebar


