

const TkImageHeader = ({ image, topPosition }) => {
  return (
    <img className="tk-image-header" src={image} alt="image header" style={{top: topPosition}} />
  );
};

export default TkImageHeader;