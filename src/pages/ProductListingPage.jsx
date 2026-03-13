import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import '../css/ProductListingPage.css';
import tenisCard from '../../assets/tenisCard.png'
import tenisfullhd from '../../assets/tenisfullhd.png'

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter') || '';
  const [sortOrder, setSortOrder] = useState('');
const baseProducts = [
    {
        category: 'Tênis',
        name: 'K-Swiss V8 - Masculino',
        price: 200,
        priceDiscount: 150,
        image: tenisCard
    },
    {
        category: 'Tênis',
        name: 'Nike Air Max - Masculino',
        price: 250,
        priceDiscount: 180,
        image: tenisfullhd
    }
];
  const products = Array.from({ length: 15 }, (_, index) => baseProducts[index % 2])
  const filteredProducts = filter 
    ? products.filter(product => 
        product.name.toLowerCase().includes(filter.toLowerCase()) ||
        product.category.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'menor-preco') {
      return (a.priceDiscount || a.price) - (b.priceDiscount || b.price);
    }
    if (sortOrder === 'maior-preco') {
      return (b.priceDiscount || b.price) - (a.priceDiscount || a.price);
    }
    return 0;
  });

  return (
    <div className="product-listing-page">
      <div className="product-listing-container">
        <aside className="product-listing-sidebar">
          <div className="sort-section">
            <label htmlFor="sort-select" className="sort-label">Ordenar por</label>
            <select
              id="sort-select"
              className="sort-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="mais-relevantes">Mais relevantes</option>
              <option value="mais-vendidos">Mais vendidos</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Filtrar por</h3>
            <hr className="filter-divider" />
            
            <FilterGroup 
              title="Marca" 
              inputType="checkbox" 
              options={[
                { text: 'Adidas' },
                { text: 'Nike' },
                { text: 'Puma' }
              ]} 
            />
            <FilterGroup 
              title="Categoria" 
              inputType="checkbox" 
              options={[
                { text: 'Esporte e lazer' },
                { text: 'Casual' },
                { text: 'Corrida' }
              ]} 
            />
            <FilterGroup 
              title="Gênero" 
              inputType="checkbox" 
              options={[
                { text: 'Masculino' },
                { text: 'Feminino' },
                { text: 'Unisex' }
              ]} 
            />
            <FilterGroup
              title="Estado"
              inputType="checkbox"
              options={[
                { text: 'Novo' },
                { text: 'Usado' }
              ]}
            />
          </div>
        </aside>

        <main className="product-listing-main">
          {filter && <p className="search-results">Resultados para "{filter}"</p>}
          {sortedProducts.length === 0 ?(
            <div className="no-products-message">
              <p>Não encontramos produtos que correspondam à sua busca "{filter}".</p>
              <p>Tente pesquisar com outras palavras-chave.</p>
            </div>):(
                        <ProductListing products={sortedProducts} showViewAll={false} />

            )}
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
