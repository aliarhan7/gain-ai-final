import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Text Content */}
            <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
              Nutrition Built for <span className="text-indigo-600">You</span>  
            </h2>
            <p className="text-gray-700 mb-6 space-y-4">  
              <span className="block">
                <span className="font-semibold text-indigo-800">Personalized meal plans</span>—crafted for your weight, 
                diet (vegan, keto, gluten-free), and activity level (MMA, workouts, etc.).  
              </span>
              <span className="block">
                <span className="font-semibold text-indigo-800">Flexible & adaptive</span>—choose 3, 5, or 6 meals/day 
                and update plans with one click when goals shift.  
              </span>
              <span className="block">
                <span className="font-semibold text-indigo-800">Smart grocery lists</span>—auto-generated with exact 
                quantities (<i>“1.4kg chicken breast, 420g oats”</i>) and easy ingredient swaps.  
              </span>
            </p>
              
              <div className="flex flex-row gap-3">
              <Link
                href="https://apps.apple.com/app/idXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="mt-5"
                  src="/2.png"
                  alt="Download on the App Store"
                  width={160}
                  height={50}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=XXXXXXXXX"
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                className="mt-5"
                src="/1.png"
                alt='Download the googleplay'
                width={160}
                height={50}
                
                />
              </Link>
              </div>
            </div>

            {/* Image Area */}
            <div className="md:w-1/2 relative">
              {/* Decorative Background */}
              <div className="absolute -z-10 right-0 bottom-0 w-3/4 h-3/4 bg-green-400 rounded-full opacity-70"></div>

              {/* Decorative Elements */}
              <div className="hidden sm:flex absolute top-8 right-8 flex-col gap-2 z-10">
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-10 h-10 bg-indigo-900 rounded-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                    <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-yellow-400 rounded-md"></div>
                  <div className="w-10 h-10 bg-green-500 rounded-md rotate-45"></div>
                </div>
              </div>

              {/* Child image */}
              <Image
                src="/phone.png"
                alt="dash"
                className="relative z-0 w-full max-w-md h-auto rounded-lg object-cover"
                width={300}
                height={900}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-16">
            {/* Image Area */}
            <div className="md:w-1/2 relative order-2 md:order-1">
              {/* Decorative Background */}
              <div className="absolute -z-10 left-0 bottom-0 w-3/4 h-3/4 bg-purple-400 rounded-full opacity-70"></div>

              {/* Child image */}
              <Image
                src="/phone.png"
                alt="dashh"
                className="relative z-0 w-full max-w-md h-auto rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
            AI Tools for Smarter <span className="text-indigo-600">Decisions</span>  
            </h2>
            <p className="text-gray-700 mb-6 space-y-4">  
              <span className="block">
                <span className="font-semibold text-indigo-800">24/7 AI Dietician Chat:</span>Ask questions like “What’s a high-protein snack?” or scan food photos for instant calorie estimates.
              </span>
              <span className="block">
                <span className="font-semibold text-indigo-800">Dine Out Stress-Free:</span>Scan restaurant menus for <i>"Top 3 macro-friendly picks at Chipotle"</i> or optimize cheat meals.
              </span>
              <span className="block">
                <span className="font-semibold text-indigo-800">Quick AI Recipes:</span>Fuel busy days with <i>“30-min MMA Fighter Meals”</i> or <i>"5-Ingredient Post-Workout Snacks"</i> easy ingredient swaps.
              </span>
            </p>
              <a
                href="https://apps.apple.com/app/idXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition duration-200"
              >
                Download on the App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
