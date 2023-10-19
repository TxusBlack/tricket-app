import BtnPrimary from "../base/buttons/BtnPrimary";

const CardQR = ({ text }) => {
  return (
    <div className="bg-white rounded-[22px] py-6 px-10">
      <h3 className="font-semibold text-lg text-zinc-600">{ text }</h3>
      <div className="flex align-center justify-center">
        <div className="flex flex-col items-center">
          <img src="/icons/qr-scanner.png" alt="QR Scanner" className="w-48 px-4 py-8" />
        </div>
      </div>
      <BtnPrimary
        text="Escanear nuevo código QR"
        onClick={() => {}}
      />
    </div>
  )
}

export default CardQR;
