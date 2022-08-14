import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Confirmation from "./components/Confirmation";
import Auth from "./components/Auth";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/e-commerce-app" element={<Home />} />
          <Route path="/e-commerce-app/cart" element={<Cart />} />
          <Route path="/e-commerce-app/auth" element={<Auth />} />
          <Route path="/e-commerce-app/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
