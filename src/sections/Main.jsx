import { assets } from "../assets/assets"

const Main = () => {
  return (
    <div className="  max-md:w-full flex flex-1 flex-col bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
from-[#52525b]
via-[#a1a1aa]
to-[#e4e4e7]
">
  <div className=" flex justify-between px-10 py-6 max-md:ml-7 max-sm:justify-end">
      <div className={`bg-card w-[200px] h-[80px] bg-cover bg-center m-0 max-md:w-[150px] max-md:h-[50px] max-sm:w-[140px] max-sm:h-[45px]`}></div>
      <div><img src={assets.user_icon} alt="" className="w-[60px] rounded-full max-md:w-[40px] max-sm:hidden" /></div>
  </div>




    </div>
  )
}

export default Main