import Banner from '../components/Banner';
import FeaturedCollections from '../components/FeaturedCollections';
import ProductListing from '../components/ProductListing'
import SpecialOffer from '../components/SpecialOffer';

const Home = () => {
    // Array com 8 produtos (mesma imagem em loop)
    const products = Array.from({ length: 8 }, (_, index) => ({
        name: `K-Swiss V8 - Masculino`,
        price: 200,
        priceDiscount: 100
    }));

    return (
        <div>
            <Banner />
            <FeaturedCollections />
            <ProductListing products={products} />
            <SpecialOffer/>
        </div>
    );
}
 
export default Home;