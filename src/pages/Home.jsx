import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import products from '../data/productsData';

const Home = ({ search }) => {
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Banner />
      <section className="shop-section">
        {filtered.length === 0 ? (
          <p className="no-results">No products found for "<strong>{search}</strong>"</p>
        ) : (
          <div className="products-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
