import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blogs/Blog';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Shared/Navbar';
import Portfolio from "./Pages/Portfolio/Portfolio";
import Purchase from "./Pages/Purchase/Purchase";
import AddReview from "./Pages/AddReview/AddReview";
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Users from './Pages/Dashboard/Users/Users';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import AddTool from './Pages/Dashboard/AddTools/AddTool';
import ManageTools from './Pages/Dashboard/ManageTools/ManageTools';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import Payment from './Pages/Dashboard/Dashboard/Payment/Payment';


function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/purchase/:toolsId" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="/dashboard" element={
          <RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="addTools" element={<AddTool></AddTool>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="manageTools" element={<ManageTools></ManageTools>}></Route>
          <Route path="manageOrder" element={<ManageOrders></ManageOrders>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
        <Route path="/addReview" element={<AddReview></AddReview>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
