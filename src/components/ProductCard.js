import React, { useEffect, useRef } from "react";
import { useCart } from "./CartContext";

const ProductCard = ({ product }) => {
    const cardRef = useRef();
    const { addToCart } = useCart();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    cardRef.current.classList.add("animate-float-in");
                    observer.unobserve(cardRef.current);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className="opacity-0 transform translate-y-10 bg-white shadow-md rounded-lg p-4 flex flex-col items-start border border-gray-200 w-64 transition-transform duration-500 ease-out"
            style={{
                fontFamily: "'Roboto', sans-serif",
            }}
        >
            <img
                src={product.image}
                alt={product.title}
                className="w-full  object-cover rounded mb-3"
                style={{
                    border: "1px solid #ddd",
                }}
            />
            <h3 className="text-base font-semibold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{product.code}</p>
            <p className="text-lg font-bold text-gray-900 mt-2">Rs. {product.price}</p>
            <button
                className="mt-4 w-full px-4 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors duration-200"
                onClick={() => addToCart(product)}
                style={{
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
