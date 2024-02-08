import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TkHeaderCarousel = ({ images }) => {
    // Configuración del carrusel
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    return (
        <div className="header">
            {Array.isArray(images) && images.length > 1 ? (
                // Si hay un array de imágenes, utiliza el carrusel
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div className="header__content" key={index}>
                            <img className="header__content-image" src={image} alt={`carousel-image-${index}`} />
                        </div>
                    ))}
                </Slider>
            ) : (
                // Si hay una sola imagen o ninguna, muestra solo una imagen
                <img src={images[0]} alt="header-image" />
            )}
        </div>
    )
};

export default TkHeaderCarousel;
