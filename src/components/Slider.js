import React from "react";
import { Box, Typography } from "@mui/material";

const slides = [
    {
        id: 1,
        image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        caption: "Slide 1",
    },
    {
        id: 2,
        image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        caption: "Slide 2",
    },
    {
        id: 3,
        image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        caption: "Slide 3",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slides every 3 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {slides.map((slide, index) => (
                <Box
                    key={slide.id}
                    sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        transition: "opacity 1s ease-in-out",
                        opacity: currentSlide === index ? 1 : 0,
                    }}
                >

                </Box>
            ))}
        </Box>
    );
};

export default Slider;
