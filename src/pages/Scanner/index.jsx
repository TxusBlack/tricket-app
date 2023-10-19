import Dashboard from "../../layouts/Dashboard"
import CardCheckIn from "../../components/cards/CardCheckIn"
import CardQR from "../../components/cards/CardQR"

const ScannerPage = () => {
  return (
    <Dashboard>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <CardCheckIn text="Check-in realizados" />
        </div>
        <div className="col-span-4">
          <CardQR text="Empezar a escanear" />
        </div>
      </div>
    </Dashboard>
  )
}

export default ScannerPage
