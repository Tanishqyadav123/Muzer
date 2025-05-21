import React from "react";
import PricingCard from "../Components/PricingCard";
import { PricingPackages } from "../lib/pricingPackageDetails";
import FAQSection from "../Components/FAQSection";

function page() {
  return (
    <div className="min-h-[70vh] w-full px-4 py-6">
      <div className="pricing-heading flex items-center justify-center flex-col text-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          Choose Your Muzer Plan
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Unlock unlimited music streaming, create collaborative playlists, and
          join live streams
        </p>
        <p className="text-gray-400 text-sm md:text-base">with friends.</p>
      </div>

      <div className="pricing-cards mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        <PricingCard
          tier="Free"
          btnText="Continue Free"
          pricing={0}
          features={PricingPackages.Free}
          pricingPackageName="Basic Experience"
        />
        <PricingCard
          tier="Premium"
          btnText="Try 7 Days Free"
          pricing={9.99}
          features={PricingPackages.Premium}
          pricingPackageName="Full Experience"
        />
        <PricingCard
          tier="Family"
          btnText="Get Family Plan"
          pricing={14.99}
          features={PricingPackages.ShareWithFamily}
          pricingPackageName="Share With Family"
        />
      </div>

      {/* FAQ Section  */}

      <FAQSection />
    </div>
  );
}

export default page;
