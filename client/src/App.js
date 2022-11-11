import React, { createContext, useState } from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import FAQ from "./pages/FAQ";
import PageNotFound from "./pages/404";

export const ThemeContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [total,setTotal] = useState(0);

  return (
    <div className="App">
      <ThemeContext.Provider value={[cart, setCart]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
