import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./pages/Blogs/Blogs";
import Complains from "./pages/Complains/Complains";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/complains" element={<Complains />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
