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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

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
          <div className="max-w-4xl max-h-screen flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-screen object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
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