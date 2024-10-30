import { useEffect, useState } from 'react';
import SingleCard from './SingleCard/SingleCard';
import ProductCategory from './ProductCategory/ProductCategory';
import ProductDetails from './ProductDetails/ProductDetails';
import Loader from './Loader'
import Error from'./Error'
import { Button } from 'react-bootstrap';
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader/>;
  if (error) return <Error/>;
//CATEGORY
  const categories =  [...new Set(products.map((product) => product.category))];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  const handleKnowMore = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} back={handleCloseDetails} />
      ) : selectedCategory ? (
        <div>
          <h1>Products in {selectedCategory}</h1>
          <Button variant="primary" className='mb-3'  onClick={() => setSelectedCategory(null)}>Back to Categories</Button>
          <div className="product-list d-flex flex-wrap gap-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product">
                <SingleCard product={product} onKnowMore={handleKnowMore} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>Product Categories</h1>
          <div className="category-list d-flex flex-wrap gap-3 justify-content-center">
            {categories.length > 0 && categories.map((category) => (
              <ProductCategory
                key={category}
                category={category}
                onClick={setSelectedCategory}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
