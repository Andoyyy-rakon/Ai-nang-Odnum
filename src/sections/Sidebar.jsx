import { assets } from "../assets/assets"
import { useState } from "react"
import { Usercontext } from "../usercontext/Usercontext"
import { useContext } from "react"
import { useEffect } from "react"

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
            <img src={assets.menu_icon} alt="" width={32}  onClick={mobileShrink}/>
        </div>

        <div  className={`min-h-screen ease-in-out  transition-all   duration-300 inline-flex flex-col z-10 bg-gray-300 px-7 py-5  justify-between fixed ${mobile ? "translate-x-0" : "-translate-x-full"}  md:static md:translate-x-0  ${!wexpand ? "w-[250px]" : "w-[120px]"}  `} >
        <div className="flex flex-col gap-6">
            <img src={assets.menu_icon} alt="" width={40} className="p-1 cursor-pointer" onClick={shrink}/>
            <div className="active:bg-gray-400 hover:bg-gray-100 duration-300 transition-all flex justify-center items-center gap-3 px-4 py-3 rounded-full  bg-gray-400 cursor-pointer " onClick={newchat}>
                <img src={assets.plus_icon} alt="" width={20} className="hover:animate-spin"/>
                {!toggle && <h3> New Chat</h3>}
                
            </div>

            {!toggle && <div className="flex flex-col gap-2 ">
                <p className="font-bold font">Recent</p>

           
                {show && history.map((item)=>(
                <div key={item}   className="flex justify-start items-center  gap-1 mt-1 cursor-pointer hover:bg-gray-400  px-5 rounded-3xl transition-all duration-300" onClick={()=>setpromt(item)}>        
                    <img src={assets.message_icon} alt="" width={30}/>
                    <p className="" >{item.content.slice(0,13)}</p>   
                </div>

                ))}
                    
                           

                
            

                
            </div>}

        </div>

        <div className="flex flex-col ">
            <div className="flex  gap-2 items-center cursor-pointer hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl"  onClick={()=>setshowmodal(true)}>
                <img src={assets.question_icon} alt="" width={25} height={25} />
                {!toggle && <p className="text-md tracking-wide">Help</p>}
                
            </div>

            <Link to={"/Activity"}>
                <div className="flex  gap-2 mt-1 items-center cursor-pointer hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl ">
                <img src={assets.history_icon} alt="" width={25} height={25} />
                {!toggle && <p className="text-md tracking-wide">Activity</p>}
                </div>
            </Link>
            <div className="flex  gap-2 items-center cursor-pointer hover:bg-gray-400 py-1 px-5 transition-all duration-300 rounded-3xl" onClick={()=>setshowsettings(true)}>
                <img src={assets.setting_icon} alt="" width={25} height={25} />
                {!toggle && <p className="text-md tracking-wide">Setting</p>}
                
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


    {showsettings&&
        <>
            <div className="fixed inset-0 bg-black z-40 bg-opacity-50 transition-opacity duration-300 cursor-pointer " onClick={()=>setshowsettings(false)}>
            </div>

            <div className={` overflow-auto scrollbar max-w-[550px] max-md:w-[90%] items-center z-50 m-auto transition-all duration-300  flex flex-col bg-slate-100 fixed inset-0 max-h-[50%] ${!scrlbar?"rounded-3xl":"rounded-l-3xl"} shadow-md shadow-slate-800 pt-10 p-5 pb-6`} >
                <button className="absolute right-4 top-5" onClick={()=>setshowsettings(false)}>

                    
                    <FontAwesomeIcon icon="fa-regular fa-circle-xmark" className="text-2xl"/>
                </button>
                
                <div className="flex items-center justify-between w-[90%] mt-5   px-4 py-3 rounded-full bg-slate-300">
                    
                    <h1 className="font-s text-lg font-medium">Theme</h1> 
                    

                    <label class="inline-flex items-center relative cursor-pointer">
                    <input class=" peer hidden" id="toggle" type="checkbox"  />
                    <div
                        class="relative w-[70px] h-[30px] bg-white peer-checked:bg-zinc-500 rounded-full 
                        after:absolute after:content-[''] after:w-[22px] after:h-[22px] 
                        after:bg-gradient-to-r from-orange-500 to-yellow-400 
                        peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 
                        after:rounded-full after:top-[4px] after:left-[4px] 
                        active:after:w-[28px] peer-checked:after:left-[70px] peer-checked:after:translate-x-[-100%] 
                        shadow-sm duration-300 after:duration-300 after:shadow-md"
                    ></div>

                    
                    <svg
                        viewBox="0 0 24 24"
                        class="fill-white peer-checked:opacity-60 absolute w-4 h-4 left-[7px]"
                    >
                        <path
                        d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                        ></path>
                    </svg>

                    
                    <svg
                        viewBox="0 0 24 24"
                        class="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-4 h-4 right-[7px]"
                    >
                        <path
                        d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                        ></path>
                    </svg>
                    </label>


    

                </div>
                


                
                

            </div>
            
        
        </>
    
    }
    
    
    </>


  )
}

export default Sidebar


