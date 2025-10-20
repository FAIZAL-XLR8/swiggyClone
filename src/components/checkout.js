import { useSelector , useDispatch} from "react-redux";
import { DecrementItems, IncremenetItems } from "../../utils/stored/CartSlicer";
export function Checkout() {
  const items = useSelector(globalState => globalState.cartSlicer.items);
  const dispatch = useDispatch();
    

  let totalPrice = 0;
for (let i = 0; i < items.length; i++) {
  totalPrice += items[i].price * items[i].quantity;
}

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Checkout</h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        {items.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Your cart is empty 🛒</p>
        ) : (
          <>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                    alt={item.name}
                    className="w-16 h-16 rounded-md object-cover border"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">₹{item.price / 100}</p>
                  </div>
                </div>

                <div  className="flex items-center gap-4">
                  <button onClick={()=>    
            dispatch(DecrementItems(item))
        } className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 font-bold">
                    -
                  </button>
                  <span className="font-semibold text-gray-800">{item.quantity}</span>
                  <button onClick={()=> dispatch(IncremenetItems(item))} className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 font-bold">
                    +
                  </button>
                  <span className="font-medium text-gray-700">
                    ₹{(item.price * item.quantity) / 100}
                  </span>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6 text-xl font-semibold text-gray-800">
              <span>Total:</span>
              <span>₹{totalPrice / 100}</span>
            </div>

            <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-lg shadow-md transition">
              Proceed to Payment
            </button>
          </>
        )}
      </div>
    </div>
  );
}
