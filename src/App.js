import "./styles/app.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import {Toaster} from "react-hot-toast" 
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";



function App() {
  return (
    <BrowserRouter>
    <Header/>
    {/* <Sidebar /> */}
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/cart" element ={<Cart/>}/>
      <Route path="/product/:productId" element={<ProductDetail/>} />
    </Routes>
    <Toaster/>
    </BrowserRouter>
  );
}

export default App;
