import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SliderComponent = () => {
  return (
    <div className="slider slider-one relative">
      <div className="background-image absolute inset-0">
        {/* Replace with your actual background image */}
        <Image
          src="/images/your-background-image.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background"
        />
      </div>
      <div className="overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="slider-text relative z-10 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Flex On a Budget</h1>
        <p className="text-xl mb-6">
          Find budget-friendly hangout spots & get exclusive discounts when you
          visit!
        </p>
        <div className="mobile-text md:hidden">
          <h1 className="text-3xl font-bold mb-2">Flex On a Budget</h1>
          <p className="text-lg mb-1">Find budget-friendly hangout spots &</p>
          <p className="text-lg mb-4">get exclusive discounts when you visit!</p>
        </div>
        <div className="links flex space-x-4">
          <Link href="">
            <Image
              width={120}
              height={40}
              src="/images/Hero/app store.png"
              alt="App Store"
            />
          </Link>
          <Link href="">
            <Image
              width={120}
              height={40}
              src="/images/Hero/google play.png"
              alt="Google Play"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

