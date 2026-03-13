import Banner from '../components/Banner';
import FeaturedCollections from '../components/FeaturedCollections';
import ProductListing from '../components/ProductListing'
import SpecialOffer from '../components/SpecialOffer';
import tenisCard from '../../assets/tenisCard.png'
import tenisfullhd from '../../assets/tenisfullhd.png'

const HomePage = () => {
    // Array com 8 produtos (mesma imagem loop)
    const baseProducts = [
        {
            category: 'Tênis',
            name: 'K-Swiss V8 - Masculino',
            price: 200,
            priceDiscount: 100,
            image: tenisCard
        },
        {
            category: 'Tênis',
            name: 'Nike Air Max - Masculino',
            price: 250,
            priceDiscount: 180,
            image:tenisfullhd
        }
    ];
    const products = Array.from({ length: 8 }, (_, index) => baseProducts[index %2]);

    return (
        <div>
            <Banner />
            <FeaturedCollections />
            <ProductListing products={products} />
            <SpecialOffer/>
        </div>
    );
}
 
export default HomePage;