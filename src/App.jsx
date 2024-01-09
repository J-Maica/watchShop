import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";
import ViewProduct from "./pages/ViewProduct";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/watchShop" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<ViewProduct />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
