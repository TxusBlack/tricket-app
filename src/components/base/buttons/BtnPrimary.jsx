const BtnPrimary = ({ text, onClick }) => {
  return (
    <button className="rounded-full bg-[#5f47f6] text-white w-full py-3 flex align-center justify-center text-xs font-bold" onClick={onClick}>
      {text}
    </button>
  )
}

export default BtnPrimary;
