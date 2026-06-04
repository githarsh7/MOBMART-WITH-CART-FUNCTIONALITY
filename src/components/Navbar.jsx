import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ search, setSearch, darkMode, setDarkMode }) => {
  const { cartCount } = useContext(StoreContext);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon">🛍️</div>
          MOBMART
        </Link>

        <nav className="nav-links">
          <Link to="/">Products</Link>
        </nav>

        <div className="nav-right">
          <input
            type="text"
            className="nav-search"
            placeholder="Search for products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/cart" className="nav-cart-btn">
            <FaShoppingCart />
            <span>My Cart</span>
            {cartCount > 0 && (
              <span className="nav-badge">{cartCount}</span>
            )}
          </Link>
          <button
            className="nav-theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;