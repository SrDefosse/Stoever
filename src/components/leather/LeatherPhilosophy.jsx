import React from 'react';

const LeatherPhilosophy = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20">
      <div className="flex flex-col gap-16">
        <div className="border-b border-gray-300 pb-8">
          <h2 className="text-5xl font-light mb-6 text-green-700">Philosophy</h2>
          <p className="text-neutral-600 max-w-3xl">
            We research and develop products that make a difference. <span className="font-semibold">Sustainable</span> meets <span className="font-semibold">high quality</span> products with international market standards. We also offer specialized technical service, conducting technical visits to any plant worldwide, and the development and design of leathers using our products.
          </p>
        </div>

        <div className="border-b border-gray-300 pb-8">
          <h2 className="text-5xl font-light mb-6 text-green-700">Attribution</h2>
          <p className="text-neutral-600 max-w-3xl">
            We focus on the <span className="font-semibold">circular economy</span> and solving environmental issues in the leather sector. Made with raw eco-friendly materials, our products shorten processing times and reduce the amount of water and energy used.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeatherPhilosophy; 