import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeItem } = useContext(StoreContext);
  const inCart = cart.find((i) => i.id === product.id);

  return (
    <div className={`product-card${inCart ? ' in-cart' : ''}`}>

      <Link to={`/details/${product.id}`} className="card-img-link">
        <div className="card-img-wrap">
          <img src={product.image} alt={product.title} className="card-img" />
        </div>
      </Link>

      <div className="card-body">
        <Link to={`/details/${product.id}`}>
          <h3 className="card-title">{product.title}</h3>
        </Link>
        <p className="card-cat">{product.category.toUpperCase()}</p>

        <div className="card-footer">
          <span className="card-price">${product.price}</span>
          {inCart ? (
            <button className="card-btn card-remove" onClick={() => removeItem(product.id)}>
              Remove from cart
            </button>
          ) : (
            <button className="card-btn card-add" onClick={() => addToCart(product.id)}>
              Add to Cart
            </button>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
