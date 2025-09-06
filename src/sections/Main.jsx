import { use, useEffect } from "react"
import { assets } from "../assets/assets"
import { useState } from "react"
import { askAiNgOdnum } from "../../aaa"
import { Usercontext } from "../usercontext/Usercontext"
import { useContext } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link } from "react-router-dom"


import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


const Main = ({promt}) => {

   const [input,setinput] = useState("");
   const [loading,setlloading] =useState(false);
  const {result,setresult} = useContext(Usercontext);
  const {additem}=useContext(Usercontext);
  const {messsage,setmessage} = useContext(Usercontext)


  useEffect(()=>{
    let timer;
    if(promt){
       timer = setTimeout(()=>{
        handlesent(promt)
      },0);
    }

    return ()=>clearTimeout(timer);

  },[promt])


 const enterSent = (e)=>{
    if(e.key==="Enter"){
      handlesent(input)
    }
 }

  
  

  const handlesent = async (value=input)=>{

    

    if (value.trim()==="")return;

    let now = new Date()
    
    const dateformat = now.toLocaleDateString("en-PH",{
      month:"short",
      day:"numeric",
      year:"numeric"
    })
    const timeformat = now.toLocaleTimeString("en-PH",{
      hour:"2-digit",
      minute:"2-digit"
    })

    console.log(dateformat)
    console.log(timeformat)
    



    setmessage(prev=>[...prev,{role:"user",content:value}])
    setresult(true);
    setlloading(true);
    additem({content:value,date:dateformat,time:timeformat});
    setinput("");

    const response  = await askAiNgOdnum(value);
    let responseArray = response.split("**");
   
    let newresponse = "";
  for (let i = 0; i < responseArray.length; i++) {
    if (i === 0 || i % 2 !== 1) {
      newresponse += responseArray[i];
    } else {
      newresponse += `<b>${responseArray[i]}</b>`;
    }
  }

  let newresponse2=newresponse.split("*").join("<br/>");
  let formatted = newresponse2
  .replace(/### (.*?)\n/g, "<h4>$1</h4>")             
  .replace(/#### (.*?)\n/g, "<h5>$1</h5>")             
  .replace(/---/g, "")                            
  .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") 
    setlloading(false);
    setmessage(prev=>[...prev,{role:"assestan",content:formatted}])
    
  }



 


  return (
    <div className=" dark:bg-[#1A1A26] dark:bg-none relative pb-[23vh] max-md:w-full flex flex-1 flex-col bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
from-[#52525b]
via-[#a1a1aa]
to-[#e4e4e7]
">
  <div className=" flex justify-between px-10 py-6 max-md:ml-7 max-sm:justify-end items-center">
    <div><img src={assets.AiNgOdnumLogo} alt="" className="max-w-[60px]  max-md:ml-5 " /></div>
    
      <div><img src={assets.user_icon} alt="" className="w-[60px] rounded-full max-md:w-[40px] max-sm:hidden" /></div>
  </div>



{/* Main continer responses shows here */}
  <div className="w-full">

    {!result? 
    <div className="max-xl:mx-5 max-w-[1000px] mt-[300px] flex flex-1 flex-col items-center justify-center m-auto">
       <h1 className="dark:text-white font-bold text-4xl max-sm:text-xl text-[#1A1A1A]">Hi there! Ready to get started</h1>
    </div> 
    :
        <div className=" max-xl:mx-5  max-w-[1000px]  flex-1 flex-col  m-auto ">
          {messsage.map((item,index)=>(
            <div key={item.content} className={`flex ${item.role==="user"? "flex-row-reverse":"flex-row"}`}>
              <img src={item.role==="user"? assets.user_icon:assets.AiNgOdnumLogo} alt="" className="w-10 h-10 rounded-full" />
              <p className={`${item.role==="user"?"m-4 text-base p-3 rounded-full bg-slate-200 dark:bg-[#3A3A4F] ":"text-base leading-7 m-5"} dark:text-[#D1D1D1] dark:`} dangerouslySetInnerHTML={{__html:item.content}}/>
            </div>
          ))}                  

          {loading&& <div>
            <img src={assets.AiNgOdnumLogo} alt="" className="w-10 h-10 rounded-full" />
            <div className="spinner mx-[50px]">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>}


        
        
       


    </div>}




  </div>


    {/* Bottom area input field div */}

  <div className="w-full m-auto absolute pb-3 px-4  bottom-0">
    <div className="dark:border-2 dark:border-[#3A3A4F] flex  max-w-[900px] my-0 mx-auto border-2 py-[10px] px-[20px] gap-2 border-gray-900 w-full justify-between rounded-[50px] items-center">
      <input placeholder="Enter Promt here" type="text" value={input} className="dark:placeholder:text-[#D1D1D1] dark:text-[#D1D1D1] placeholder:text-black flex-1 min-w-0 border-none bg-transparent outline-none text-lg " onChange={e=>setinput(e.target.value)} onKeyDown={enterSent} />
      <FontAwesomeIcon icon="fa-solid fa-image" className="text-xl dark:text-[#D1D1D1]" />
      <FontAwesomeIcon icon="fa-solid fa-microphone" className="text-xl dark:text-[#D1D1D1]" />
      <FontAwesomeIcon icon="fa-solid fa-paper-plane" className="cursor-pointer text-xl rotate-45 dark:text-[#D1D1D1]  " onClick={()=>handlesent(input)} />
    </div>
      <p className="dark:text-[#D1D1D1] my-1 mx-auto text-center text-sm">AI ng Odnum may display inaccurate info, including about people, so double-check its responses.</p>
  </div>




    </div>
 
  )
}

export default Main