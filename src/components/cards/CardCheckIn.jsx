const CardCheckIn = ({ text }) => {
  return (
    <div className="bg-white rounded-[22px] py-6 px-10">
      <h3 className="font-semibold text-lg text-zinc-600">{ text }</h3>
      <div className="flex align-center justify-center py-9">
        <div className="flex flex-col items-center">
          <h4 className="w-48 text-center text-zinc-300 font-semibold text-sm">Aún no se ha realizado ningún check-in!</h4>
          <img src="/icons/buzon.png" alt="Buzon" className="w-40 p-4" />
        </div>
      </div>
    </div>
  )
}

export default CardCheckIn;
