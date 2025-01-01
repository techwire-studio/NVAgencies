import React, { useEffect } from "react";

const categories = [
    { name: "Graphics", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
    { name: "Side Stand", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
    { name: "Silencer Parts", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
    { name: "Footrest", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
    { name: "Brake Shoe", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
    { name: "Kick", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
    { name: "Fork", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
    { name: "No. Plate", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
    { name: "Air Filter", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
    { name: "Mudguard", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
];

const Categories = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in-up");
                        observer.unobserve(entry.target); // Triggers animation only once
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-8 px-6 bg-[#FAF3E0]">
            <h2 className="text-2xl font-semibold text-[#4A403A] mb-6">
                Featured Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white border border-[#D9C1A5] rounded-lg p-4 shadow-lg opacity-0 transform translate-y-10 animate-on-scroll"
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-32 object-cover rounded mb-3"
                        />
                        <p className="text-center font-medium text-[#4A403A] mb-4">
                            {category.name}
                        </p>
                        <button className="mt-auto w-full border border-[#804A27] text-[#804A27] rounded-full py-2 text-sm hover:bg-[#804A27] hover:text-white transition">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
