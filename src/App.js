import './App.css';
import Nav from "./component/navBar/nav";
import Home from "./component/Home/Home";
import Products from "./component/Products/Products";
import SingleProduct from "./component/SingleProduct/SingleProduct";
import Store from "./component/Store/Store";
import Footer from "./component/Footer/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Product" element={<Products />}/>
            <Route path="/SingleProduct" element={<SingleProduct />}/>
            <Route path="/Store" element={<Store />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
