import img1 from '../../assets/drop.png';
import img2 from '../../assets/adidas.png';
import img3 from '../../assets/beats.png';
import icon from '../../assets/imgIcon.png';
import '../css/FeaturedCollections.css';

export default function FeaturedCollections() {
    return (
       <div id="collection">
            <h1>Coleções em destaque</h1>
            <div id="collectionTitle">
                <div>
                    <img src={img1} alt="Coleção 1" />
                </div>
                <div>
                    <img src={img2} alt="Coleção 2" />
                </div>
                <div>
                    <img src={img3} alt="Coleção 3" />
                </div>
            </div>
            <div className="destaqueIcon">
                <h1>Coleções em destaque</h1>
                <div className="destaqueIconImg">
                    <img src={icon} alt="Ícone de destaque" />
                </div>
            </div>
       </div>
    )
}