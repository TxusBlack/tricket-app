import TkButton from "../atoms/Tk-Button/tk-button";
import TkCard from "../atoms/Tk-Card/tk-card";
import TkInput from "../atoms/Tk-Input/tk-input";

const TkPurchase = () => {
    const addCoupon = () => {
        console.log('addCoupon');
    }


  return (
    <TkCard>
        <div>
            <h3>2. Realiza la orden</h3>
            <h3>Wish Outdoor 2021</h3>
        </div>
        <TkCard>            
            <TkInput type="text" placeholder="Tienes un cupón?" iconInput={'IoIosPricetags'} />
            <TkButton label="Ingresar" isShowIcon={false} onClick={addCoupon
            } />

        </TkCard>

        <TkCard>

        </TkCard>


    </TkCard>
  );
};

export default TkPurchase;
