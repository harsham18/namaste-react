import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-center font-bold  p-4 text-lg">Cart</h1>
      <div className="text-center">
        <button
          className="border border-black p-2 m-2 rounded-lg"
          onClick={clearCartItems}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto text-center">
        {cartItems.length === 0 && <h1>Cart is Empty</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
