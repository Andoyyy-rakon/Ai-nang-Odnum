

const Fdata = ({question,answer}) => {
  return (
    <div className="">
        <h2 className="dark:text-[#A0E7E5] text-slate-900 leading-7 font-semibold">{question}</h2>
        <h3  className="dark:text-[#E0E0E0] px-2 text-slate-700 text-md">{answer}</h3>
    </div>
  )
}

export default Fdata