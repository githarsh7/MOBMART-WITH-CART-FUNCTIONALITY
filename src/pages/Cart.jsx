import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Cart = () => {
  const {
    cart, increment, decrement, removeItem, clearCart,
    cartSubTotal, cartTax, cartTotal,
  } = useContext(StoreContext);

  const totalQty = cart.reduce((s, i) => s + i.count, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Browse our products and add something!</p>
        <Link to="/" className="empty-btn">← Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* ── ITEM CARDS ── */}
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-card" key={item.id}>

            <img src={item.image} alt={item.title} className="cart-img" />

            <div className="cart-info">
              <h3 className="cart-name">{item.title}</h3>
              <span className="cart-stock">In Stock</span>

              {/* qty dropdown — same as screenshot */}
              <select
                className="cart-qty"
                value={item.count}
                onChange={(e) => {
                  const next = parseInt(e.target.value);
                  const diff = next - item.count;
                  if (diff > 0) for (let k = 0; k < diff;  k++) increment(item.id);
                  else          for (let k = 0; k < -diff; k++) decrement(item.id);
                }}
              >
                {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>

              <p className="cart-unit">${item.price.toFixed(2)}</p>
              <p className="cart-line-total">Total:&nbsp;<strong>${item.total.toFixed(2)}</strong></p>
            </div>

            <button className="cart-remove" onClick={() => removeItem(item.id)}>✕</button>
          </div>
        ))}
      </div>

      {/* ── SUMMARY ── */}
      <div className="cart-summary">
        <div className="s-row">
          <span>SUBTOTAL:</span>
          <span>${cartSubTotal.toFixed(2)}</span>
        </div>
        <div className="s-row">
          <span>TOTAL QUANTITY:</span>
          <span>{totalQty}</span>
        </div>
        <div className="s-row">
          <span>SHIPPING:</span>
          <span className="s-free">FREE</span>
        </div>
        <div className="s-divider" />
        <div className="s-row s-total">
          <span>TOTAL:</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
        <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
      </div>

    </div>
  );
};

export default Cart;
