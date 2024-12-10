import React from "react";
import Image from "next/image";

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer mx-4 mb-6">
      <div className=" relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src="/property_image.jpg"
          alt="property"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-sm font-semibold">Home, Bali, Indonesia</p>
      </div>
      <div className="mt-2">
        <p className="text-sm">
          <strong>$1,200</strong> night
        </p>
      </div>
    </div>
  );
};

export default PropertyListItem;
