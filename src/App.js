import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import AboutMe from './Pages/AboutMe/AboutMe';
import Register from './Pages/AuthPages/Register/Register';
import Login from './Pages/AuthPages/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/AuthPages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <div className='main-body'>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/checkout/:chkID" element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
          <Route path="/about" element={<AboutMe></AboutMe>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>

      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
