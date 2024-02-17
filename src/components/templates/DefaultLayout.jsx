import TkImageTicket from "../atoms/Tk-Image-Header/tk-image-header";
import Footer from "../organims/Tk-Footer/Footer";



const DefaultLayout = ({ image, children }) => {
  return (
    <div>
      <div className="default-header">
        <div className="container-header"></div>
        <div className="default-image-ticket">
          <TkImageTicket image={image}/>
        </div>
      </div>
      <div className="container mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;


