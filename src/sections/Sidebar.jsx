import { assets } from "../assets/assets"
import { useState } from "react"
import { Usercontext } from "../usercontext/Usercontext"
import { useContext } from "react"
import { useEffect } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

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
    

    



    useEffect(()=>{
        if(history.length>0){
            setshow(true);
        }
    },[history])




    const shrink = ()=>{
        setTimeout(()=>{
            settogle((prev)=>!prev);
        },100)
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
            <img src={assets.menu_icon} alt="" width={32}  onClick={mobileShrink}/>
        </div>

        <div style={{width:!wexpand? "300px" : "120px"}} className={`min-h-screen  transition-[width] duration-300 inline-flex flex-col z-10 bg-gray-300 px-7 py-5  justify-between fixed ${mobile ? "translate-x-0" : "-translate-x-full"}  transition-transform duration-300  md:static md:translate-x-0 `} >
        <div className="flex flex-col gap-6">
            <img src={assets.menu_icon} alt="" width={40} className="p-1 cursor-pointer" onClick={shrink}/>
            <div className="active:bg-gray-400 hover:bg-gray-100 duration-300 transition-all flex justify-center items-center gap-3 px-4 py-3 rounded-full  bg-gray-400 cursor-pointer " onClick={newchat}>
                <img src={assets.plus_icon} alt="" width={20} className="hover:animate-spin"/>
                {!toggle && <h3> New Chat</h3>}
                
            </div>

            {!toggle && <div className="flex flex-col gap-2">
                <p className="font-bold font">Recent</p>

           
                {show && history.map((item)=>(
                <div   className="flex justify-start items-center gap-1 mt-1 cursor-pointer hover:bg-gray-400  px-5 rounded-3xl transition-all duration-300" onClick={()=>setpromt(item)}>        
                    <img src={assets.message_icon} alt="" width={30}/>
                    <p>{item.slice(0,17)}</p>   
                </div>

                ))}
                    
                           

                
            

                
            </div>}

        </div>

        <div className="space-y-3 mt-5">
            <div className="flex  gap-2 items-center cursor-pointer hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl"  onClick={()=>setshowmodal(true)}>
                <img src={assets.question_icon} alt="" width={25} height={25} />
                {!toggle && <p>Help</p>}
                
            </div>

            <div className="flex  gap-2 items-center cursor-pointer hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl ">
                <img src={assets.history_icon} alt="" width={25} height={25} />
                {!toggle && <p>Activity</p>}
                
            </div>


            <div className="flex  gap-2 items-center cursor-pointer hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl">
                <img src={assets.setting_icon} alt="" width={25} height={25} />
                {!toggle && <p>Setting</p>}
                
            </div>


        </div>

    </div>


    {showmodal && 
        <>
            <div className="fixed inset-0 bg-black z-40 bg-opacity-50 transition-opacity duration-300 cursor-pointer " onClick={()=>setshowmodal(false)}>
            </div>

            <div className={` overflow-auto scrollbar max-xl:max-w-[90%] xl:max-w-[50%] items-center z-50 m-auto transition-all duration-300  flex flex-col bg-slate-100 fixed inset-0 max-h-[90%] ${!scrlbar?"rounded-3xl":"rounded-l-3xl"} shadow-md shadow-slate-800 p-5 pb-6`} >
        
                <button className="absolute right-4" onClick={()=>setshowmodal(false)}>

                    
                    <FontAwesomeIcon icon="fa-regular fa-circle-xmark" className="text-2xl"/>
                </button>

                <h2 className="text-xl mt-3 font-semibold">Help & Guide</h2>
            
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
                    <h1 className="font-bold text-lg">FAQ</h1>
                    {fData.map((item)=>(
                        <Fdata key={item.id} {...item}/>
                    ))}
                </div>



            </div>
        
        </>




    
    }
    
    
    </>


  )
}

export default Sidebar


