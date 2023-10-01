import Dashboard from "../../layouts/Dashboard"

const CardCheckIn = ({ text }) => {
  return (
    <div className="bg-white rounded-[22px] py-6 px-10">
      <h3 className="font-semibold text-xl text-zinc-600">{ text }</h3>
      <div className="flex align-center justify-center">
        <div className="flex flex-col items-center">
          <h4 className="w-48 text-center text-zinc-300 font-semibold text-sm">Aún no se ha realizado ningún check-in!</h4>
          <img src="/icons/buzon.png" alt="Buzon" className="w-32 p-4" />
        </div>
      </div>
    </div>
  )
}

const ScannerPage = () => {
  return (
    <Dashboard>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7">
          <CardCheckIn text="Check-in realizados" />
        </div>
        <div className="col-span-5">
          <CardCheckIn text="Check-in realizados" />
        </div>
      </div>
    </Dashboard>
  )
}

export default ScannerPage
