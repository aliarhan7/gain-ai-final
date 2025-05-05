import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <>  
      

      <Image 
      src="/bb-bg.png" 
      alt="Description of image" 
      width={100}
      height={100}
      className="absolute top-52 left- z-0"
    />
      <div 
        className="relative w-screen h-80 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/bb-bg.png')" }}
      >
        {/* Siyah overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Yazı içeriği */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold tracking-tight font-serif">
          Your AI-Powered Nutrition Coach—Custom Meal Plans, Smarter Grocery Lists, Real-Time Tracking
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
          Achieve your fitness goals with personalized diets tailored to your weight, lifestyle, and preferences—no guesswork required.
          </p>
        </div>
      </div>
      

    </>

  );
};

export default Intro;
