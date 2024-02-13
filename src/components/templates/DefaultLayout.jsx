import TkImageHeader from "../atoms/Tk-Image-Header/tk-image-header";
import Footer from "../organims/Tk-Footer/Footer";


const DefaultLayout = ({ image, topPositionImg, children }) => {
  return (
    <div>
      <div>
        <div className="container-header"></div>
        <TkImageHeader image={image} topPosition={topPositionImg} />
      </div>
      <div className="container mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;


