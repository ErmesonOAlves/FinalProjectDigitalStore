import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import '../css/ProductListingPage.css';

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter') || '';
  const [sortOrder, setSortOrder] = useState('');

  const products = Array.from({ length: 15 }, (_, index) => ({
    name: `K-Swiss V8 - Masculino ${index + 1}`,
    price: 200 + (index * 10),
    priceDiscount: index % 2 === 0 ? 150 + (index * 5) : undefined
  }));

  const sortedProducts = [...products].sort((a, b) => {
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
          </div>
        </aside>

        <main className="product-listing-main">
          {filter && <p className="search-results">Resultados para "{filter}"</p>}
          <ProductListing products={sortedProducts} />
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
