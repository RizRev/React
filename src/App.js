import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {useState} from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import Profile from './pages/Profile'
import Login_cus from './pages/Login/Login_cust'
import Login_sel from './pages/Login/Login_sel'
import SignUp_sel from './pages/Login/SignUp_sel'
import SignUp_cus from './pages/Login/SignUp_cus'
import ResetPW from './pages/Login/ResetPW'
import ConfirmPW from './pages/Login/ConfirmPW'
import Loginpw from './pages/Login/Loginpw'
import Checkout from './pages/Checkout'
import MyBag from './pages/MyBag'
import ProductDetail from "./pages/product-detail";
import SellingProduct from './pages/SellingProduct'
import {BrowserRouter,Route,Link,Routes,Navigate} from 'react-router-dom'
import AuthChecker from './components/AuthChecker'
import MyOrderSeller from "./pages/MyorderCustomer";
import DetailOrder from "./pages/DetailOrder";



function App() {
  const [title,setTitle] = useState("E coomerce")
  return (
    
    <div className="App">
      <header className="App-header">
        {title}
      </header>
      {/* <NavBar /> */}
      <BrowserRouter>
        {/* <nav className='bg-info'>
            <Link to="/">Home</Link>
          
            <Link to="/product">Product</Link>
          
            <Link to="/about">About</Link>
          
            <Link to="/profile">Profile</Link>

            <Link to="/Login_cus">Login_cus</Link>

            <Link to="/Login_sel">Login_sel</Link>

            <Link to="/SignUp_sel">SignUp_sel</Link>

            <Link to="/SignUp_cus">SignUp_cus</Link>

            <Link to="/ResetPW">ResetPW</Link>

            <Link to="/ConfirmPW">ConfirmPW</Link>

            <Link to="/Loginpw">Loginpw</Link>

            <Link to="/Checkout">Checkout</Link>

            <Link to="/MyBag">MyBag</Link>

            <Link to="/SellingProduct">SellingProduct</Link>

            <Link to="/product-detail/:id"> Product Detail</Link>

            <Link to="/myorder/seller"> CheckoutBaru</Link>

            <Link to="/detailorder/:id"> DetailOrder</Link>

        </nav> */}
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} replace="true" />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={
          <AuthChecker>
            <Product />
          </AuthChecker>
           } />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Login_cus' element={<Login_cus />} />
          <Route path='/Login_sel' element={<Login_sel />} />
          <Route path='/SignUp_sel' element={<SignUp_sel />} />
          <Route path='/SignUp_cus' element={<SignUp_cus />} />
          <Route path='/ResetPW' element={<ResetPW />} />
          <Route path='/ConfirmPW' element={<ConfirmPW />} />
          <Route path='/Loginpw' element={<Loginpw />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/MyBag' element={<MyBag />} />
          <Route path='/SellingProduct' element={<SellingProduct />} />
          <Route path="/myorder/seller" element={<MyOrderSeller />}></Route>
          <Route path="/detailorder/:id" element={<DetailOrder />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
