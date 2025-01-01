import React from "react";
import { products } from "../data.js";
import ProductCard from "../components/ProductCard.js";
import Slider from "../components/Slider.js";
import Category from "../components/Category.js";
import { useCart } from "../components/CartContext.js";

const Home = () => {
    const { addToCart } = useCart();

    return (
        <div>
            <Slider />
            <div className="py-8 px-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-[#804A27]">
                    New Products - Oct/Nov
                </h2>
                <div className="relative">
                    <div
                        className="flex overflow-x-scroll no-scrollbar gap-6"
                        style={{
                            scrollSnapType: "x mandatory",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex-shrink-0"
                                style={{
                                    scrollSnapAlign: "start",
                                }}
                            >
                                <ProductCard product={product} addToCart={addToCart} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Category />
        </div>
    );
};

export default Home;
