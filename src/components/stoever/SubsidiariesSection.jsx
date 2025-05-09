import React from "react";
import BlueButton from "../ui/BlueButton";
import WhiteButton from "../ui/WhiteButton";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import Link from "next/link";

const SubsidiariesSection = () => {
  return (
    <MaxWidthWrapper>
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-5xl font-light text-blue-900 mb-4">
          Ready to delve into our products? Explore our subsidiaries
        </h1>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Construction Card */}
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col items-center gap-6">
            <img 
              src="/construction_icon.png" 
              alt="Stoever Construction" 
              className="w-32 h-32 object-contain"
            />
            <h3 className="text-2xl font-bold text-gray-800">
              Stoever Construction
            </h3>
            <Link href="/construction">
            <BlueButton text="Visit" />
            </Link>
          </div>
        </div>

        {/* Biosolutions Card */}
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col items-center gap-6">
            <img 
              src="/biosolutions_icon.png" 
              alt="Stoever Leather" 
              className="w-32 h-32 object-contain"
            />
            <h3 className="text-2xl font-bold text-gray-800">
              Stoever Leather
            </h3>
            <Link href="/leather">
            <BlueButton text="Visit" />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 flex justify-center text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Or contact us directly.
        </h2>
      </div>
      <div className="flex justify-center">
        <Link href="/contact">
        <WhiteButton text="Contact" />
        </Link>
      </div>
    </section>
    </MaxWidthWrapper>
  );
};

export default SubsidiariesSection; 
