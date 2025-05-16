import React from 'react';
import YellowButton from '../ui/YellowButton';

const products = [
  {
    name: "Vinyl Paints",
    description: "We offer various grades of interior and exterior vinyl paints with a durability of 3.5 and 7 years, and offers color matching services in the grade of your choice.",
    image: '/construction/grid/grid1.webp', 
    href: "/construction/productsandservices"
  },
  {
    name: "Polyurethanes",
    description: "A high-performance 2-component coating, developing excellent chemical and mechanical resistance properties at room temperature.",
    image: '/construction/grid/grid5.webp', 
    href: "/construction/productsandservices"
  },
  {
    name: "Stuccos",
    description: "We offer various types of stuccos and pastes, made from cement powder and mineral granulometry that generate great mechanical strength and controlled purity in interior and exterior finishes.",
    image: '/construction/grid/grid8.webp', 
    href: "/construction/productsandservices"
  },
  {
    name: "Aggregates for Concrete",
    description: "Stoever has a quarry where you can find different sizes of gravel to meet any resistance. You'll also find different qualities of sand and gravel for your platforms.",
    image: '/construction/grid/grid14.webp', 
    href: "/construction/productsandservices"
  }
];

const ProductCard = ({ name, description, image, href }) => (
  <a href={href} id="products-cta" className="relative h-80 overflow-hidden rounded-lg shadow-lg group cursor-pointer block">
    {/* Background Image with Zoom Effect */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
      style={{ backgroundImage: `url(${image})` }}
    >
    </div>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-opacity-75"></div>
    {/* Content Area */}
    <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white overflow-hidden">
      {/* Description */}
      <p className="text-sm opacity-0 transform translate-y-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 mb-2">
        {description}
      </p>
      {/* Title (Stays at the bottom) */}
      <h3 className="text-2xl font-semibold transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
        {name}
      </h3>
    </div>
  </a>
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

        <div className="">
          <YellowButton text="Explore All Products" href="/construction/productsandservices" />
        </div>
      </div>
    </section>
  );
};

export default ProductsCTA;
