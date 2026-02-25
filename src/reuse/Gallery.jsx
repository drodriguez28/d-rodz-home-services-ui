import { useState, useEffect } from "react";

export const Gallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({});

  const getImageOrientation = (src) => {
    if (imageDimensions[src]) {
      const { width, height } = imageDimensions[src];
      return height > width ? "portrait" : "landscape";
    }
    return "landscape";
  };

  const handleImageLoad = (src, event) => {
    const img = event.target;
    setImageDimensions((prev) => ({
      ...prev,
      [src]: { width: img.naturalWidth, height: img.naturalHeight },
    }));
  };

  const getGridColSpan = (orientation) => {
    return orientation === "portrait" ? "col-span-1" : "col-span-1 md:col-span-2";
  };

  const getImageHeight = (orientation) => {
    return orientation === "portrait" ? "h-80" : "h-64 md:h-72";
  };

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, images]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
        {images.map((image, index) => {
          const orientation = getImageOrientation(image);
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer group ${getGridColSpan(
                orientation
              )} ${getImageHeight(orientation)}`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onLoad={(e) => handleImageLoad(image, e)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all" />
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors z-51"
            aria-label="Previous image"
          >
            ←
          </button>

          <div className="max-w-4xl max-h-screen flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-screen object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors z-51"
            aria-label="Next image"
          >
            →
          </button>

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};