import { use } from "react"
import { assets } from "../assets/assets"
import { useState } from "react"
import { askAiNgOdnum } from "../../aaa"
import { Usercontext } from "../usercontext/Usercontext"
import { useContext } from "react"

// Updated
const Main = () => {

   const [input,setinput] = useState("");
   const [reply, setreply] = useState("");
   const [previnput, setprevinput] = useState("")

  const {result,setresult} = useContext(Usercontext)

  

  const handlesent = async (value=input)=>{

    if (value.trim()==="")return;

    console.log("click")
    setinput("")
    setprevinput(value)
    const response  = await askAiNgOdnum(value)
    let responseArray = response.split("**")
    console.log(responseArray)
    let newresponse = "";

  for (let i = 0; i < responseArray.length; i++) {
    if (i === 0 || i % 2 !== 1) {
      newresponse += responseArray[i];
    } else {
      newresponse += `<b>${responseArray[i]}</b>`;
    }
  }

  let newresponse2=newresponse.split("*").join("<br/>")
  let formatted = newresponse2
  .replace(/### (.*?)\n/g, "<h4>$1</h4>")             
  .replace(/#### (.*?)\n/g, "<h5>$1</h5>")             
  .replace(/---/g, "")                            
  .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") 

    setreply(formatted)
    


    console.log(reply)


    

  }



 


  return (
    <div className="relative pb-[15vh] max-md:w-full flex flex-1 flex-col bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
from-[#52525b]
via-[#a1a1aa]
to-[#e4e4e7]
">
  <div className=" flex justify-between px-10 py-6 max-md:ml-7 max-sm:justify-end items-center">
    <div><img src={assets.AiNgOdnumLogo} alt="" className="max-w-[60px]  max-md:ml-5" /></div>
    
      <div><img src={assets.user_icon} alt="" className="w-[60px] rounded-full max-md:w-[40px] max-sm:hidden" /></div>
  </div>



{/* Main continer responses shows here */}
  <div className="w-full">

    {!result? 
    <div className="max-xl:mx-5 max-w-[1000px] mt-[300px] flex flex-1 flex-col items-center justify-center m-auto">
       <h1 className="font-bold text-4xl max-sm:text-xl">Hi there! Ready to get started</h1>
    </div> 
    :
        <div className=" max-xl:mx-5  max-w-[1000px]  flex-1 flex-col  m-auto ">
        <div className="flex flex-row-reverse ">
           <img src={assets.user_icon} alt="" className="w-10 h-10 rounded-full" />
           <p className=" m-4 text-base p-3 rounded-full bg-slate-200">{previnput}</p>
        </div>

        <div className="flex flex-row">
          <img src={assets.AiNgOdnumLogo} alt="" className="w-10 h-10 rounded-full" />
          <p className="text-base leading-7 m-5 " dangerouslySetInnerHTML={{ __html: reply }} />
        </div>
    </div>}




  </div>


    {/* Bottom area input field div */}

  <div className="w-full m-auto absolute pb-3 px-4  bottom-0">
    <div className="flex  max-w-[900px] my-0 mx-auto border-2 py-[10px] px-[20px] gap-3 border-gray-900 w-full justify-between rounded-[50px] items-center">
      <input placeholder="Enter Promt here" type="text" value={input} className="placeholder:text-black flex-1 min-w-0 border-none bg-transparent outline-none text-lg " onChange={e=>setinput(e.target.value)} />
      <img src={assets.gallery_icon} alt="" className=" max-md:w-5 max-md:h-5 w-7 cursor-pointer "    />
      <img src={assets.mic_icon} alt=""     className=" max-md:w-5 max-md:h-5 w-7 cursor-pointer " />
      <img src={assets.send_icon} alt=""    className=" max-md:w-5 max-md:h-5 w-7 cursor-pointer " onClick={()=>handlesent(input)}  />
    </div>
      <p className="my-1 mx-auto text-center text-sm">AI ng Odnum may display inaccurate info, including about people, so double-check its responses.</p>
  </div>




    </div>
 
  )
}

export default Main