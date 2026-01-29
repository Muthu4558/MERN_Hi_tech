import React, { useEffect } from "react";

const ImageLightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center">
      
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
      >
        ✕
      </button>

      {/* Left */}
      <button
        onClick={onPrev}
        className="absolute left-6 text-white text-4xl hover:scale-110 transition"
      >
        ‹
      </button>

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="Preview"
        className="max-w-[90%] max-h-[85%] rounded-xl shadow-2xl animate-fadeIn"
      />

      {/* Right */}
      <button
        onClick={onNext}
        className="absolute right-6 text-white text-4xl hover:scale-110 transition"
      >
        ›
      </button>
    </div>
  );
};

export default ImageLightbox;
