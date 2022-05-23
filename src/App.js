import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blogs/Blog';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
