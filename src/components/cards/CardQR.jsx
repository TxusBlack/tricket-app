import { useState } from "react";
import BtnPrimary from "../base/buttons/BtnPrimary";
import QrReader from "react-qr-scanner";
import ModalSimple from "../base/modals/ModalSimple";

const CardQR = ({ text }) => {
  const [showModal, setShowModal] = useState(false);
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState(null);

  const handleScan = (data) => {
    if (!result) setResult(data?.text);
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="bg-white rounded-[22px] py-6 px-10">
      <h3 className="font-semibold text-lg text-zinc-600">{text}</h3>
      <div className="flex align-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src="/icons/qr-scanner.png"
            alt="QR Scanner"
            className="w-48 px-4 py-8"
          />
        </div>
      </div>
      <BtnPrimary text="Escanear nuevo código QR" onClick={() => setShowModal(true)} />
      <ModalSimple
        body={
          <>
            <QrReader
              delay={delay}
              style={previewStyle}
              onError={handleError}
              onScan={handleScan}
            />
            {
              result && (
                <p className="pt-4">{result}</p>
              )
            }
          </>
        }
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default CardQR;
