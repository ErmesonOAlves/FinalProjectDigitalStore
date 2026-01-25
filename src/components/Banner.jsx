import { FaFire } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Banner.css';
import fila1 from '../../assets/fila1.png';
import fila2 from '../../assets/fila2.png';
import fila3 from '../../assets/fila3.png';
import fila4 from '../../assets/fila4.png';

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
            <h3>Melhores ofertas personalizadas</h3>
            <h1>Queima de estoque Fila <FaFire size={30} color="#FF4500" /></h1>
            <p>Tênis Fila com descontos incríveis! Estilo e conforto para o seu treino. Garanta as melhores ofertas da semana agora. Estoque limitado, aproveite já!</p>
            <button>Ver Ofertas</button>
          </div>
          <div id="bannerImg">
            <Slider {...settings}>
              <div>
                <img src={fila1} alt="Slide 1" />
              </div>
              <div>
                <img src={fila2} alt="Slide 2" />
              </div>
              <div>
                <img src={fila3} alt="Slide 3" />
              </div>
              <div>
                <img src={fila4} alt="Slide 4" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner;