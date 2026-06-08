import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import products from '../data/productsData';
import { StoreContext } from '../context/StoreContext';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { cart, addToCart, removeItem } = useContext(StoreContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')}>
          ← Back to Shop
        </button>
      </div>
    );
  }

  const inCart = cart.find((item) => item.id === product.id);

  const stars = (rating) =>
    '★'.repeat(Math.floor(rating)) +
    '☆'.repeat(5 - Math.floor(rating));

  return (
    <div className="details-page">

      <div className="details-img-wrap">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      {/* changed from details-content to details-info */}
      <div className="details-info">

        <p className="details-cat">
          {product.category.toUpperCase()}
        </p>

        <h1 className="details-title">
          {product.title}
        </h1>

        <p className="details-brand">
          by {product.brand}
        </p>

        <div className="details-stars">
          {stars(product.rating)}
          <span> ({product.rating})</span>
        </div>

        <p className="details-price">
          ${product.price.toFixed(2)}
        </p>

        <p className="details-desc">
          {product.description}
        </p>

        <div className="details-stock">
          <span className="stock-dot"></span>
          In Stock ({product.stock} units)
        </div>

        <div className="details-actions">

          {inCart ? (
            <button
              className="details-btn d-remove"
              onClick={() => removeItem(product.id)}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="details-btn d-add"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
          )}

          <button
            className="details-back"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

        </div>

      </div>

    </div>
  );
};

export default Details;