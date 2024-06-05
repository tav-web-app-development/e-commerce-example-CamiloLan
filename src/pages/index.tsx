import Layout from '../components/Layout';

const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 39.99 },
  { id: 3, name: 'Product 3', price: 49.99 },
];

const HomePage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="mt-2">${product.price.toFixed(2)}</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
