
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "../src/style.css"
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import UserDashboard from './components/UserDashboard';
import OrderStatus from './components/OrderStatus';
import OrderHistory from './components/OrderHistory';
import MyWishlist from './components/MyWishlist';
import ChangePassword from './components/ChangePassword';
import Logout from './components/Logout';
import AdminDashboard from './components/adminComponents/AdminDashboard';
import Users from './components/adminComponents/Users';
import AddProduct from './components/adminComponents/AddProduct';
import ViewProducts from './components/adminComponents/ViewProducts';
import ActiveOrders from './components/adminComponents/ActiveOrders';
import AdminSidebar from './components/adminComponents/AdminSidebar';


function App() {
  return (
    <>

      <Header/>
      <Routes>

    <Route exact path='/' element={<Home/>}/>  
    <Route exact path='/about' element={<About/>}/>  
    <Route path='/cart' element={<Cart />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/checkout' element={<Checkout />} />
    <Route path='/userDashboard' element={<UserDashboard />} />
    <Route path='/orderStatus' element={<OrderStatus />} />
    <Route path='/orderHistory' element={<OrderHistory />} />
    <Route path='/myWishlist' element={<MyWishlist />} />
    <Route path='/changePassword' element={<ChangePassword />} />
    <Route path='/logout' element={<Logout />} />



    <Route path='/admin/adminSidebar' element={<AdminSidebar />} />
    <Route path='/admin/adminDashboard' element={<AdminDashboard />} />
    <Route path='/admin/users' element={<Users />} />
    <Route path='/admin/addProduct' element={<AddProduct />} />
    <Route path='/admin/viewProducts' element={<ViewProducts />} />
    <Route path='/admin/activeOrders' element={<ActiveOrders />} />


    
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
