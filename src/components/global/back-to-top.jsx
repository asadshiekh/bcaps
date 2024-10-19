"use client"; // Only use this if you are in a Next.js app using the app directory
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the arrow icon from react-icons

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down by a certain amount
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page back to the top when clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-secondary text-white shadow-lg hover:bg-primary transition duration-300 ease-in-out"
        >
          <FaArrowUp size={24} /> {/* Use the react-icons arrow icon */}
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
