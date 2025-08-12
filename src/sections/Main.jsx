import { assets } from "../assets/assets"

const Main = () => {
  return (
    <div className="relative pb-[15vh] max-md:w-full flex flex-1 flex-col bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
from-[#52525b]
via-[#a1a1aa]
to-[#e4e4e7]
">
  <div className=" flex justify-between px-10 py-6 max-md:ml-7 max-sm:justify-end">
      <div className={`bg-card w-[200px] h-[80px] bg-cover bg-center m-0 max-md:w-[150px] max-md:h-[50px] max-sm:w-[140px] max-sm:h-[45px]`}></div>
      <div><img src={assets.user_icon} alt="" className="w-[60px] rounded-full max-md:w-[40px] max-sm:hidden" /></div>
  </div>

  <div className="max-w-[900px] my-0 mx-auto">
      This is the response area    
  </div>


  <div className="w-full m-auto absolute pb-3 px-4  bottom-0">
    <div className="flex  max-w-[900px] my-0 mx-auto border-2 py-[10px] px-[20px] gap-3 border-gray-900 w-full justify-between rounded-[50px] items-center">
      <input type="text" className="flex-1 min-w-0 border-none bg-transparent outline-none text-lg" />
      <img src={assets.gallery_icon} alt="" className=" max-md:w-5 max-md:h-5 w-7 cursor-pointer "    />
      <img src={assets.mic_icon} alt=""     className=" max-md:w-5 max-md:h-5 w-7 cursor-pointer " />
      <img src={assets.send_icon} alt=""    className=" max-md:w-5 max-md:h-5 w-7 cursor-pointer "  />
    </div>
      <p className="my-1 mx-auto text-center text-sm">AI ng Odnum may display inaccurate info, including about people, so double-check its responses.</p>
  </div>




    </div>
  )
}

export default Main