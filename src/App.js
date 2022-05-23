import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Blog from "./pages/Blog/Blog";
import Blogs from "./pages/Blogs/Blogs";
import Cart from "./pages/Cart/Cart";
import Complain from "./pages/Complain/Complain";
import Complains from "./pages/Complains/Complains";
import Forum from "./pages/Forum/Forum";
import Forums from "./pages/Forums/Forums";
import Home from "./pages/Home/Home";
import NewBlog from "./pages/NewBlog/NewBlog";
import NewComplain from "./pages/NewComplain/NewComplain";
import NewProduct from "./pages/NewProduct/NewProduct";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SIgnUp/SignUp";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-blog" element={<RequireAuth><NewBlog /></RequireAuth>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/forums/:id" element={<Forum />} />
        <Route path="/new-complain" element={<RequireAuth><NewComplain /></RequireAuth>} />
        <Route path="/new-product" element={<RequireAuth><NewProduct /></RequireAuth>} />
        <Route path="/complains" element={<RequireAuth><Complains /></RequireAuth>} />
        <Route path="/complain/:id" element={<RequireAuth><Complain /></RequireAuth>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
