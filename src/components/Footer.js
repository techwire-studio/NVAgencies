import React, { useEffect, useRef } from "react";
import '../style/index.css';

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const footer = footerRef.current;
            if (footer) {
                const footerPosition = footer.getBoundingClientRect().top;
                const screenPosition = window.innerHeight;

                if (footerPosition < screenPosition) {
                    footer.classList.add("animate-fadeIn");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer
            ref={footerRef}
            className="bg-white text-brown-700 py-10 transform translate-y-10 transition duration-1000"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">NV Agencies</h2>
                        <p className="text-sm">
                            Delivering quality products since 1990. Serving customers with integrity and innovation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-brown-700 hover:text-brown-500">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-brown-700 hover:text-brown-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">About</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Our Blog</a></li>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">My Account</a></li>
                            <li><a href="#" className="hover:underline">Track Order</a></li>
                            <li><a href="#" className="hover:underline">Return Policy</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">NV Agencies | Genuine Parts</h3>
                        <div className="flex flex-wrap items-start space-x-4 text-sm">
                            <p>#2/3, NV House, H. Siddaiah Road, Bengaluru-560002, Karnataka, India.</p>
                            <span>|</span>
                            <p>Customer Care: +917483436715</p>
                            <span>|</span>
                            <p>customer.care@nvagencies.co.in</p>
                            <span>|</span>
                            <p>Timings: 10:00 AM - 7:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <h3 className="text-xl font-semibold">Subscribe to our newsletter</h3>
                        <div className="mt-4 md:mt-0 flex items-center space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown-400"
                            />
                            <button className="px-4 py-2 bg-brown-700 text-white rounded-md hover:bg-brown-600">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
