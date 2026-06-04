import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar  from './components/Navbar';
import Home    from './pages/Home';
import Cart    from './pages/Cart';
import Details from './pages/Details';
import './App.css';

function App() {
  const [search, setSearch]     = useState('');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar
        search={search}
        setSearch={setSearch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Routes>
        <Route path="/"            element={<Home search={search} />} />
        <Route path="/cart"        element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;