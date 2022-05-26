import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import components
import Client from "./pages/layout/Client";
import Server from "./pages/layout/Server";
import List from "./components/server/product";
import Dashboard from "./pages/server/Dashboard";
import AddProduct from "./components/server/product/add";
import EditProduct from "./components/server/product/edit";
import ListCate from "./components/server/category";
import AddCate from "./components/server/category/add";
import UpdateCate from "./components/server/category/edit";
import Home from "./pages/client/Home";
import Detail from "./components/client/Detail";
import Category from "./pages/client/Category";
import SignUp from "./pages/client/SignUp";
import LogIn from "./pages/client/LogIn";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Client />}>
          <Route index element={<Home />}/>
          <Route path="sign-up" element={<SignUp />}/>
          <Route path="log-in" element={<LogIn />}/>

          <Route path="categories" element={<Category />}/>

          <Route path=":slug/detail-product" element={<Detail />}/>
        </Route>
        <Route path="admin" element={<Server />}>
          <Route index element={<Dashboard />}/>
          <Route path="product" >
            <Route index element={<List />}/>
            <Route path="add" element={<AddProduct />} />
            <Route path=":slug/edit" element={<EditProduct />}/>
          </Route>
          <Route path="category">
            <Route index element={<ListCate />}/>
            <Route path="add" element={<AddCate />}/>
            <Route path=":slug/edit" element={<UpdateCate />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
