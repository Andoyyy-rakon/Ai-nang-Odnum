import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


const Helpcard = ({title,contents,isExpand,isToggle}) => {


  return (
    <div className={`relative   transition-all duration-300  border-x-3 rounded-xl  border-slate-900 ${isExpand? "max-h-[390px] bg-slate-400 " :"max-h-[60px] bg-slate-300"}`} >
        <div className="flex justify-between p-4  items-center transition-all duration-300" >
            <div className='text-md' >{title}</div>
            <FontAwesomeIcon icon="fa-solid fa-caret-down" className={` transition-all duration-300 text-2xl cursor-pointer ${isExpand?"":"-rotate-90"}`} onClick={isToggle} />
        </div>

        <div className={`text-sm p-4  ${isExpand? "opacity-100":"opacity-0"} leading-7 transition-all duration-400`}>
            {contents.map((item)=>(
                <div key={item}>
                    {item}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Helpcard