import { assets } from "../assets/assets"
import { useState } from "react"
import { Usercontext } from "../usercontext/Usercontext"
import { useContext } from "react"
import { useEffect } from "react"
import Settings from "./Settings"

import ChangeFontSettings from "./ChangeFontSettings"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link } from "react-router-dom"


import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


import { helpdata,fData } from "../components/helpdata"
import Helpcard from "../components/Helpcard"
import Fdata from "../components/Fdata"
import { width } from "@fortawesome/free-brands-svg-icons/fa11ty"


const Sidebar = ({setpromt}) => {


    const [toggle,settogle] =useState(false);
    const [mobile,setmobile] = useState(false);
    const [animate , setanimate] = useState(true);
    const {history,sethistory} = useContext(Usercontext);
    const [show,setshow] =useState(false);
    const {setresult} = useContext(Usercontext)
    const {setmessage} = useContext(Usercontext)
    const [showmodal,setshowmodal]=useState(false)
    const [scrlbar,setscrlbar]=useState(false)
    const [expand,setexpand] = useState(null)
    const [wexpand,wsetexpand]=useState(false)
    const [showsettings,setshowsettings]=useState(false)
    const {darkmode,setdarkmode} = useContext(Usercontext)

    



    useEffect(()=>{
        if(history.length>0){
            setshow(true);
        }
    },[history])




    const shrink = ()=>{
        setTimeout(()=>{
            settogle((prev)=>!prev);
        },50)
        wsetexpand(prev=>!prev);
    }


    const mobileShrink = ()=>{
        setmobile(prev=>!prev);
        setanimate(animate=>!animate);
        setTimeout(() => {
            setanimate(animate=>!animate);
        }, 1000);
        
        
    }

    const newchat = ()=>{
        setresult(false)
        sethistory([])
        setmessage([])
    }



    const toExpand=(item)=>{
        setexpand(prev=>prev===item?null:item)
        setscrlbar(expand===item? false:true)
    }


  return (

    <>
        <div className={`md:hidden  absolute z-20 px-[31px] py-[24px]  transition-opacity  ${animate ? "opacity-100" :"opacity-0"}`}>
              <FontAwesomeIcon icon="fa-solid fa-bars" className="dark:text-[#E0E0E0] text-2xl pt-0 mr-10" onClick={mobileShrink} />
        </div>

        <div  className={`min-h-screen ease-in-out dark:bg-[#1E1E2E]  transition-all   duration-300 inline-flex flex-col z-10  bg-gray-300 px-7 py-5  justify-between fixed ${mobile ? "translate-x-0" : "-translate-x-full"}  md:static md:translate-x-0  ${!wexpand ? "w-[250px]" : "w-[120px]"}  `} >
        <div className="flex flex-col gap-6">
            
              <FontAwesomeIcon icon="fa-solid fa-bars" className={`dark:text-[#E0E0E0] text-2xl cursor-pointer pt-1 text-black`} onClick={shrink} />
            <div className={` dark:active:bg-[#2A2A3B] dark:bg-[#2A2A3B] dark:hover:bg-[#3A3A4F] active:bg-gray-400 hover:bg-gray-100  duration-300 transition-all flex justify-center items-center gap-3 px-4 py-3 rounded-full bg-gray-400   cursor-pointer `} onClick={newchat}>
                <FontAwesomeIcon icon="fa-solid fa-plus" className="dark:text-[#EDEDED] text-xl text-[#2D2D2D]" />
                {!toggle && <h3 className="dark:text-[#EDEDED] text-[#2D2D2D] font-medium "> New Chat</h3>}
                
            </div>

            {!toggle && <div className="flex flex-col gap-2 ">
                <p className={`dark:text-[#E0E0E0] font-bold font`}>Recent</p>

           
                {show && history.map((item)=>(
                <div key={item}   className="dark:hover:bg-[#2A2A3B] p-1 flex justify-start items-center  gap-2 mt-1 cursor-pointer hover:bg-gray-400  px-5 rounded-3xl transition-all duration-300" onClick={()=>setpromt(item)}>        
                    <FontAwesomeIcon icon="fa-regular fa-message"  className={`text-[#2D2D2D] dark:text-[#E0E0E0]`}/>
                    <p className={`text-[#2D2D2D] dark:text-[#E0E0E0]`} >{item.content.slice(0,13)}</p>   
                </div>

                ))}
                    
                           

                
            

                
            </div>}

        </div>

        <div className="flex flex-col ">
            <div className="flex  gap-2 items-center cursor-pointer dark:hover:bg-[#2A2A3B] hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl"  onClick={()=>setshowmodal(true)}>
                <FontAwesomeIcon icon="fa-solid fa-circle-question"  className={`dark:text-[#E0E0E0] text-[1.2rem] text-[#2D2D2D] `} />
                {!toggle && <p className={`dark:text-[#E0E0E0] text-md font-medium tracking-wide text-[#2D2D2D]`}>Help</p>}
                
            </div>

            <Link to={"/Activity"}>
                <div className="flex  gap-2 mt-1 items-center cursor-pointer dark:hover:bg-[#2A2A3B] hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl ">
                <FontAwesomeIcon icon="fa-solid fa-clock"  className={`dark:text-[#E0E0E0] text-lg  text-[#2D2D2D]`} />
                {!toggle && <p className={`dark:text-[#E0E0E0] text-md font-medium tracking-wide text-[#2D2D2D]`}>Activity</p>}
                </div>
            </Link>
            <div className="flex  gap-2 items-center cursor-pointer dark:hover:bg-[#2A2A3B] hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl" onClick={()=>setshowsettings(true)}>
                <FontAwesomeIcon icon="fa-solid fa-gear" className={`dark:text-[#E0E0E0] text-lg text-[#2D2D2D] `} />
                {!toggle && <p className={`dark:text-[#E0E0E0] text-md font-medium tracking-wide text-[#2D2D2D] `}>Setting</p>}
                
            </div>


        </div>

    </div>


    {showmodal && 
        <>
            <div className="dark:bg-opacity-55 fixed inset-0 bg-black z-40 bg-opacity-50 transition-opacity duration-300 cursor-pointer " onClick={()=>setshowmodal(false)}>
            </div>

            <div className={` dark:bg-[#1E1E2E] dark:shadow-none overflow-auto scrollbar max-xl:max-w-[90%] xl:max-w-[50%] items-center z-50 m-auto transition-all duration-300  flex flex-col bg-slate-100 fixed inset-0 max-h-[90%] ${!scrlbar?"rounded-3xl":"rounded-l-3xl"} shadow-md shadow-slate-800 p-5 pb-6`} >
        
                <button className="absolute right-4" onClick={()=>setshowmodal(false)}>

                    
                    <FontAwesomeIcon icon="fa-regular fa-circle-xmark" className="dark:text-[#E0E0E0] text-2xl"/>
                </button>

                <h2 className="dark:text-[#E0E0E0] text-xl mt-3 font-semibold">Help & Guide</h2>
            
                <div className="flex flex-col gap-3 flex-1 p-10 ">
                    {helpdata.map((item)=>(
                        <Helpcard
                        key={item.id}
                        {...item}
                        isExpand={expand===item.id}
                        isToggle={()=>toExpand(item.id)} // ari is daw i call mo ang function sa piyak nga file kag diri i run sa parent
                        />
                    ))}
                </div>


                <div className="bottom-11 flex flex-col gap-2 w-full px-12">
                    <h1 className="dark:text-[#E0E0E0] font-bold text-lg">FAQ</h1>
                    {fData.map((item)=>(
                        <Fdata key={item.id} {...item}/>
                    ))}
                </div>



            </div>
        
        </>




    
    }


    {showsettings&&
        <>
            <div className="transition-all duration-300 ease-in-out fixed dark:bg-opacity-55 inset-0 bg-black z-40 bg-opacity-50 cursor-pointer " onClick={()=>setshowsettings(false)}>
            </div>

            <div className={` ease-in-out dark:bg-[#1E1E2E] dark:shadow-none overflow-auto  max-w-[550px] max-md:w-[90%] items-center z-50 m-auto transition-all duration-300  flex flex-col bg-slate-100 fixed inset-0 max-h-[50%] ${!scrlbar?"rounded-3xl":"rounded-l-3xl"} shadow-md shadow-slate-800 pt-10 p-5 pb-6`} >
                <button className="absolute right-4 top-5" onClick={()=>setshowsettings(false)}>

                    
                    <FontAwesomeIcon icon="fa-regular fa-circle-xmark" className="text-2xl"/>
                </button>

                <Settings/>
                <ChangeFontSettings/>
                
                
            </div>
            
        
        </>
    
    }
    
    
    </>


  )
}

export default Sidebar


