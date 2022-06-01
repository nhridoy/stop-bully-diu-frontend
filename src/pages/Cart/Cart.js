import React from "react";
import useCart from "../../hooks/useCart";
import {
  clearLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../utils/cartstore";
import interceptor from "../../utils/interceptor";

const Cart = () => {
  const [carts, setCarts] = React.useState(getFromLocalStorage());

  const [occurrences, setOccurances] = React.useState(
    carts.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {})
  );
  console.log(occurrences);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    Object.keys(occurrences).forEach(function (key) {
      interceptor(`/api/product/${key}`).then((res) => {
        setCartProducts((prev) => [
          ...prev,
          {
            ...res.data,
            quantity: occurrences[key],
            price: res.data.product_price * occurrences[key],
          },
        ]);
        setTotal((prev) => prev + res.data.product_price * occurrences[key]);
      });
    });
  };

  const removeFromCart = (id) => {
    setCartProducts((prev) => prev.filter((product) => product.id !== id));
    removeFromLocalStorage(id);
    fetchCart();
  };
  return (
    <div className="py-4">
      {/* Shopping Cart Design */}
      <div className="container p-8 mx-auto mt-12">
        <div className="w-full overflow-x-auto">
          <div className="my-2">
            <h3 className="text-xl font-bold tracking-wider">
              Shopping Cart {cartProducts?.length} item
            </h3>
          </div>
          <table className="w-full shadow-inner text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 font-bold whitespace-nowrap">
                  Product
                </th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Price</th>
                {/* <th className="px-6 py-3 font-bold whitespace-nowrap">
                  Remove
                </th> */}
              </tr>
            </thead>
            <tbody>
              {cartProducts?.map((product) => {
                const { id, product_name, product_price, price, quantity } =
                  product;
                return (
                  <tr key={id}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {product_name}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">{quantity}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">${price}</td>
                    {/* <td className="px-6 py-4 whitespace-no-wrap">
                      <button
                        className="bg-red-600 px-3 py-1"
                        onClick={() => {
                          removeFromCart(product);
                        }}
                      >
                        Remove
                      </button>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="mt-4">
            <div className="py-4 rounded-md shadow">
              <h3 className="text-xl font-bold text-blue-600">Order Summary</h3>
              <div
                className="
                flex
                items-center
                justify-between
                px-4
                py-2
                mt-3
                border-t-2
              "
              >
                <span className="text-xl font-bold">Total</span>
                <span className="text-2xl font-bold">${total}</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              className="
              w-full
              py-2
              text-center text-white
              bg-blue-500
              rounded-md
              shadow
              hover:bg-blue-600
            "
              onClick={() => {
                clearLocalStorage();
                alert("Order Placed");
                // setCarts([]);
                // setOccurances({});
                // fetchCart();
                setCartProducts([]);
                setTotal(0);

                // window.location.reload();
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
