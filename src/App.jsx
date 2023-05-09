import styles from './App.module.scss';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
//Component
import { Header, Footer, PgFOF } from './components';
//Page
import {
  //Page
  Home, Contact, Products, Cart,
  //Auth
  Login, Register, Reset, User,
  //Admin
  ProductList, Admin, AddProduct
} from "./page";

function App() {

  const user = useSelector((state) => state.auth);
  const isLogin = localStorage.getItem("user")

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <ToastContainer position="bottom-right" />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/reset' element={<Reset />}></Route>
          <Route path='*' element={<PgFOF />}></Route>
          <Route path='/add_product' element={<AddProduct />}></Route>
          <Route path='/list_product' element={<ProductList />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/products' element={isLogin === true ? (<Products />) : (<Navigate to="/login" />)}></Route>
          <Route path='/user' element={<User />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
