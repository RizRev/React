import {useState} from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import Profile from './pages/Profile'
import Login_cust from './pages/Login_cust'
import Login_sel from './pages/Login_sel'
import SignUp_sel from './pages/SignUp_sel'
import SignUp_cus from './pages/SignUp_cus'
import ResetPW from './pages/ResetPW'
import ConfirmPW from './pages/ConfirmPW'
import Loginpw from './pages/Loginpw'
import Checkout from './pages/Checkout'
import MyBag from './pages/MyBag'
import SellingProduct from './pages/SellingProduct'
import {BrowserRouter,Route,Link,Routes,Navigate} from 'react-router-dom'
import AuthChecker from './components/AuthChecker'

function App() {
  const [title,setTitle] = useState("E coomerce")
  return (
    
    <div className="App">
      <header className="App-header">
        {title}
      </header>
      {/* <NavBar /> */}
      <BrowserRouter>
        <nav className='bg-info'>
            <Link to="/">Home</Link>
          
            <Link to="/product">Product</Link>
          
            <Link to="/about">About</Link>
          
            <Link to="/profile">Profile</Link>

            <Link to="/Login_cust">Login_cust</Link>

            <Link to="/Login_sel">Login_sel</Link>

            <Link to="/SignUp_sel">SignUp_sel</Link>

            <Link to="/SignUp_cus">SignUp_cus</Link>

            <Link to="/ResetPW">ResetPW</Link>

            <Link to="/ConfirmPW">ConfirmPW</Link>

            <Link to="/Loginpw">Loginpw</Link>

            <Link to="/Checkout">Checkout</Link>

            <Link to="/MyBag">MyBag</Link>

            <Link to="/SellingProduct">SellingProduct</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} replace="true" />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={
          <AuthChecker>
            <Product />
          </AuthChecker>
           } />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Login_cust' element={<Login_cust />} />
          <Route path='/Login_sel' element={<Login_sel />} />
          <Route path='/SignUp_sel' element={<SignUp_sel />} />
          <Route path='/SignUp_cus' element={<SignUp_cus />} />
          <Route path='/ResetPW' element={<ResetPW />} />
          <Route path='/ConfirmPW' element={<ConfirmPW />} />
          <Route path='/Loginpw' element={<Loginpw />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/MyBag' element={<MyBag />} />
          <Route path='/SellingProduct' element={<SellingProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
