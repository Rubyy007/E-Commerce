import App from './App.jsx';
import './index.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter and necessary components
import "./index.css";
import ContextProvider from './context/Context.jsx';
import CategoryItems from "./Collection/categoryItems.jsx";
import Register from './LoginReg/Reg.jsx';
import Login from './LoginReg/Login.jsx';
import ProductDetail from './Collection/productDetail/productDetail.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Router> 
      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="/product" element={<ProductDetail />} >
          <Route path=':productId' element={<ProductDetail/>}/>
          </Route>
        <Route path="/mensCollection" element={<CategoryItems category='men' />} />
        <Route path="/womenCollection" element={<CategoryItems category='women' />} />
        <Route path="/loginpage" element={<Login />} />
        <Route path="/regPage" element={<Register />} />
        <Route path="/childCollection" element={<CategoryItems category='child' />} />
      </Routes>
    </Router>
  </ContextProvider>
);
