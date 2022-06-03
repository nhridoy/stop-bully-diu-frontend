import React from "react";
import ProductList from "../../components/Common/ProductList";
import myAxios from '../../utils/myAxios';
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const getProducts = () => {
    myAxios.get("/api/products/").then(res => {
      setProducts(res.data);
      console.log(res.data);
    }).catch(err => {
      console.log(err.response.data);
    })
  }

  React.useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <Link to='/new-product' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Add Product
      </Link>
      <div className="py-4 grid grid-cols-5 gap-4">
        {
          products.length > 0 && products.map(product => (
            <ProductList key={product.id} product={product} />
          ))
        }
      </div>
    </>
  );
};

export default Products;
