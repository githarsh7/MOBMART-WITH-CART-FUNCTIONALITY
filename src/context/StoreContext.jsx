import { createContext, useState } from 'react';
import productsData from '../data/productsData';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const product = products.find((p) => p.id === id);
    const already = cart.find((p) => p.id === id);
    if (already) {
      setCart(cart.map((p) =>
        p.id === id
          ? { ...p, count: p.count + 1, total: parseFloat(((p.count + 1) * p.price).toFixed(2)) }
          : p
      ));
    } else {
      setCart([...cart, { ...product, count: 1, total: product.price }]);
    }
  };

  const increment = (id) =>
    setCart(cart.map((p) =>
      p.id === id
        ? { ...p, count: p.count + 1, total: parseFloat(((p.count + 1) * p.price).toFixed(2)) }
        : p
    ));

  const decrement = (id) =>
    setCart(
      cart
        .map((p) =>
          p.id === id
            ? { ...p, count: p.count - 1, total: parseFloat(((p.count - 1) * p.price).toFixed(2)) }
            : p
        )
        .filter((p) => p.count > 0)
    );

  const removeItem = (id) => setCart(cart.filter((p) => p.id !== id));
  const clearCart  = ()   => setCart([]);

  const cartSubTotal = parseFloat(cart.reduce((s, p) => s + p.total, 0).toFixed(2));
  const cartTax      = parseFloat((cartSubTotal * 0.1).toFixed(2));
  const cartTotal    = parseFloat((cartSubTotal + cartTax).toFixed(2));
  const cartCount    = cart.reduce((s, p) => s + p.count, 0);

  return (
    <StoreContext.Provider value={{
      products, cart, cartCount,
      addToCart, increment, decrement, removeItem, clearCart,
      cartSubTotal, cartTax, cartTotal,
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
