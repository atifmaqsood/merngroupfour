import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/style.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import UserDashboard from "./userComponents/UserDashboard";
import OrderStatus from "./userComponents/OrderStatus";
import OrderHistory from "./userComponents/OrderHistory";
import MyWishlist from "./components/MyWishlist";
import ChangePassword from "./userComponents/ChangePassword";
import AdminDashboard from "./adminComponents/AdminDashboard";
import Users from "./adminComponents/Users";
import AddProduct from "./adminComponents/AddProduct";
import ViewProducts from "./adminComponents/ViewProducts";
import ActiveOrders from "./adminComponents/ActiveOrders";
import AdminSidebar from "./adminComponents/AdminSidebar";
import WhislistHistory from "./userComponents/WhislistHistory";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myWishlist" element={<MyWishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />


        <Route path="/user/userDashboard" element={<UserDashboard />} />
        <Route path="/user/orderStatus" element={<OrderStatus />} />
        <Route path="/user/orderHistory" element={<OrderHistory />} />
        <Route path="/user/whishlistHistory" element={<WhislistHistory />} />
        <Route path="/user/changePassword" element={<ChangePassword />} />

        <Route path="/admin/adminSidebar" element={<AdminSidebar />} />
        <Route path="/admin/adminDashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/admin/viewProducts" element={<ViewProducts />} />
        <Route path="/admin/activeOrders" element={<ActiveOrders />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
