import React from 'react'
import Gallery from '../components/Gallery'
import BuyBox from '../components/BuyBox'
import ProductOptions from '../components/ProductOptions'
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import Layout from './Layout'
import '../css/ProductViewPage.css'

export default function ProductViewPage() {
  const images = [
    { src: '/product-image-1.png' },
    { src: '/product-image-2.png' },
    { src: '/product-image-3.png' },
    { src: '/product-image-4.png' },
    { src: '/product-image-5.png' }
  ];
  const recommendedProducts = [
    {
      name: 'K-Swiss V8 - Masculino',
      image: '/product-thumb-1.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis'
    },
    {
      name: 'K-Swiss V8 - Masculino',
      image: '/product-thumb-2.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis'
    },
    {
      name: 'K-Swiss V8 - Masculino',
      image: '/product-thumb-3.png',
      price: 200,
      priceDiscount: 149.9,
      category: 'Tênis'
    },
    {
      name: 'K-Swiss V8 - Masculino',
      image: '/product-thumb-4.png',
      price: 49.9,
      category: 'Tênis'
    }
  ];

  
  
  
    return (
    <Layout>  
         <div className="product-view-container">
        <div className="product-view-content">
          <Gallery 
            images={images}
            showThumbs
            width={700}
            height={570}
            radius="4px"
          />
          <BuyBox
            name="Tênis Nike Revolution 6 Next Nature Masculino"
            reference="38416711"
            stars={4.7}
            rating={90}
            price={219}
            priceDiscount={219}
            description="Casual | Nike | REF:38416711"
          >
            <div className="product-options-section">
              <h3>Tamanho</h3>
              <ProductOptions 
                options={['39', '40', '41', '42', '43']}
                shape="square"
                type="text"
                radius="4px"
              />
            </div>

            <div className="product-options-section">
              <h3>Cor</h3>
              <ProductOptions 
                options={['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']}
                shape="circle"
                type="color"
              />
            </div>
          </BuyBox>
        </div>

        <Section 
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/produtos' }}
        >
          <ProductListing products={recommendedProducts} showViewAll={false} showHeader={false}/>
        </Section>
      </div>
    </Layout>
  )
}