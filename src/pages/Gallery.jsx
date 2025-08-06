import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images - you can move this to gallery.json later
  const galleryImages = [
    {
      id: 1,
      src: "/api/placeholder/800/600",
      alt: "Fresh croissants on display",
      title: "Golden Buttery Croissants",
      category: "Pastries",
    },
    {
      id: 2,
      src: "/api/placeholder/800/600",
      alt: "Chocolate wedding cake",
      title: "Custom Wedding Cake",
      category: "Cakes",
    },
    {
      id: 3,
      src: "/api/placeholder/800/600",
      alt: "Artisan bread loaves",
      title: "Fresh Baked Artisan Breads",
      category: "Breads",
    },
    {
      id: 4,
      src: "/api/placeholder/800/600",
      alt: "Colorful macarons",
      title: "French Macarons Collection",
      category: "Pastries",
    },
    {
      id: 5,
      src: "/api/placeholder/800/600",
      alt: "Baker kneading dough",
      title: "Our Master Baker at Work",
      category: "Behind the Scenes",
    },
    {
      id: 6,
      src: "/api/placeholder/800/600",
      alt: "Birthday cake with candles",
      title: "Custom Birthday Celebration",
      category: "Cakes",
    },
    {
      id: 7,
      src: "/api/placeholder/800/600",
      alt: "Danish pastries variety",
      title: "Assorted Danish Pastries",
      category: "Pastries",
    },
    {
      id: 8,
      src: "/api/placeholder/800/600",
      alt: "Bakery storefront",
      title: "Sweet Delights Storefront",
      category: "Our Bakery",
    },
    {
      id: 9,
      src: "/api/placeholder/800/600",
      alt: "Cupcakes with frosting",
      title: "Decorated Cupcakes",
      category: "Cakes",
    },
  ];

  // Open lightbox modal
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Close lightbox modal
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Navigate to previous image
  const previousImage = () => {
    const newIndex =
      currentImageIndex === 0
        ? galleryImages.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Navigate to next image
  const nextImage = () => {
    const newIndex =
      currentImageIndex === galleryImages.length - 1
        ? 0
        : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedImage) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") previousImage();
    if (e.key === "ArrowRight") nextImage();
  };

  // Add keyboard event listener when modal is open
  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, currentImageIndex]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gallery Header */}
      <section className="bg-gradient-to-r from-amber-600 to-yellow-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-white mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Gallery
            </h1>
          </div>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Take a visual journey through our bakery's finest creations, from
            artisanal breads to elegant celebration cakes
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <Camera className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white font-medium text-sm">
                      View Full Size
                    </p>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                    {image.title}
                  </h3>
                  <p className="text-xs text-gray-500">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Modal Content */}
          <div className="max-w-4xl max-h-full flex flex-col items-center">
            {/* Main Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="text-center mt-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-gray-300 mb-4">{selectedImage.category}</p>
              <p className="text-sm text-gray-400">
                {currentImageIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeLightbox}></div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-yellow-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Want to See More?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Visit our bakery to see these delicious creations in person and
            discover new favorites!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
            >
              Browse Our Menu
            </a>
            <a
              href="/contact"
              className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-200"
            >
              Visit Our Store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
