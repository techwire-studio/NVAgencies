import React from "react";
import { useCart } from "./CartContext";

const ShoppingCartPage = () => {
    const { cartItems, updateQuantity } = useCart();

    const taxRate = 0.18;
    const subtotal = cartItems.reduce(
        (sum, item) => sum + parseFloat(item.price.replace(/,/g, "")) * item.quantity,
        0
    );
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2 space-y-4">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center bg-white shadow-md rounded-lg p-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />
                                <div className="flex-1 ml-4">
                                    <h2 className="font-semibold text-gray-800 text-lg">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600">Price: Rs. {item.price}</p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md"
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <p className="text-lg font-bold text-gray-800">
                                    Rs. {parseFloat(item.price.replace(/,/g, "")) * item.quantity}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">Your cart is empty.</p>
                    )}
                </div>

                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-semibold text-gray-800">Rs. {subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Tax (18%)</span>
                            <span className="font-semibold text-gray-800">Rs. {tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-2">
                            <span>Total</span>
                            <span>Rs. {total.toFixed(2)}</span>
                        </div>
                    </div>
                    <button
                        className="mt-6 w-full bg-[#804A27] text-white py-2 px-4 rounded-md hover:bg-[#703e22] transition"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
