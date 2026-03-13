import { FaFire } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Banner.css';
import img1 from '../../assets/White-Sneakers-PNG-Clipart 1.png';


function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <section id="bannerHome">
        <div className="banner-container">
          <div id="bannerOfertas">
            <h3 >Melhores ofertas personalizadas</h3>
            <h1>Queima de estoque Nike <FaFire size={30} color="#FF4500" /></h1>
            <p>Tênis Nike com descontos incríveis! Estilo e conforto para o seu treino. Garanta as melhores ofertas da semana agora. Estoque limitado, aproveite já!</p>
            <button>Ver Ofertas</button>
          </div>
          <div id="bannerImg">
            <Slider {...settings}>
              <div>
                <img src={img1} alt="Slide 1" />
              </div>
              <div>
                <img src={img1} alt="Slide 2" />
              </div>
              <div>
                <img src={img1} alt="Slide 3" />
              </div>
              <div>
                <img src={img1} alt="Slide 4" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner;