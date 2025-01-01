import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#333] flex flex-col items-center px-6 sm:px-12 lg:px-24 py-12">
            <div className="max-w-4xl w-full text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#5A4231]">
                    About Us
                </h1>
                <p className="text-lg sm:text-xl text-[#6D5543] leading-relaxed">
                    Welcome to our company! We are dedicated to delivering top-quality products
                    and services that make a difference. Our team is passionate about innovation,
                    excellence, and creating meaningful connections with our customers.
                </p>
            </div>

            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-semibold text-[#5A4231]">
                        Our Mission
                    </h2>
                    <p className="text-base sm:text-lg text-[#6D5543] leading-relaxed">
                        To provide exceptional solutions that meet the ever-evolving needs of our
                        customers. We aim to set industry standards with our commitment to quality,
                        integrity, and innovation.
                    </p>
                </div>
                <img
                    src="https://via.placeholder.com/600x400"
                    alt="Company values"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>

            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
                <img
                    src="https://via.placeholder.com/600x400"
                    alt="Team collaboration"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="space-y-6">
                    <h2 className="text-3xl font-semibold text-[#5A4231]">
                        Why Choose Us?
                    </h2>
                    <p className="text-base sm:text-lg text-[#6D5543] leading-relaxed">
                        With years of experience, a customer-first approach, and a passion for
                        innovation, we strive to be your trusted partner in achieving your goals.
                        We believe in building long-term relationships based on trust and mutual success.
                    </p>
                </div>
            </div>

            <div className="mt-16 max-w-4xl text-center">
                <h2 className="text-3xl font-semibold mb-4 text-[#5A4231]">
                    Join Us in Building a Better Tomorrow
                </h2>
                <p className="text-base sm:text-lg text-[#6D5543] leading-relaxed">
                    We are more than a company; we are a community of innovators, dreamers, and
                    problem-solvers. Together, we aim to create a positive impact on the world.
                </p>
            </div>
        </div>
    );
};

export default About;
