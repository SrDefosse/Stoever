import React from 'react';
import YellowButton from '../ui/YellowButton';
import Link from 'next/link';
// Placeholder images - replace with actual image paths or components
const placeholderImages = [
  '/placeholder-vinyl.jpg', // Replace with actual image path
  '/placeholder-poly.jpg',  // Replace with actual image path
  '/placeholder-stucco.jpg', // Replace with actual image path
  '/placeholder-concrete.jpg', // Replace with actual image path
];

const products = [
  {
    name: "Vinyl Paints",
    description: "We offer various grades of interior and exterior vinyl paints with a durability of 3.5 and 7 years, and offers color matching services in the grade of your choice.",
    image: placeholderImages[0],
  },
  {
    name: "Polyurethanes",
    description: "A high-performance 2-component coating, developing excellent chemical and mechanical resistance properties at room temperature.",
    image: placeholderImages[1],
  },
  {
    name: "Stuccos",
    description: "We offer various types of stuccos and pastes, made from cement powder and mineral granulometry that generate great mechanical strength and controlled purity in interior and exterior finishes.",
    image: placeholderImages[2],
  },
  {
    name: "Concrete",
    description: "We offer a wide range of comprehensive concrete solutions for construction.",
    image: placeholderImages[3],
  }
];

const ProductCard = ({ name, description, image }) => (
  <div className="relative h-80 overflow-hidden rounded-lg shadow-lg group cursor-pointer">
    {/* Background Image with Zoom Effect */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-75"></div>
    {/* Content Area */}
    <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white overflow-hidden">
      {/* Description (Moves up on hover) */}
      <p className="text-sm opacity-0 transform translate-y-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 mb-2">
        {description}
      </p>
      {/* Title (Stays at the bottom) */}
      <h3 className="text-2xl font-semibold transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
        {name}
      </h3>
    </div>
  </div>
);

const ProductsCTA = () => {
  return (
    <section className="py-16 bg-[#3A3A3A] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            We've been developing products for your property maintenance since 1995, always providing experience and quality in our work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/construction/productsandservices">
            <YellowButton text="Explore All Products" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsCTA;
