import React from 'react'
import Image from "next/image"

const About = () => {
  return (
    <div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
              Mit Tracking und Cookies nutzen
              </h2>
              <p className="text-gray-700 mb-6">
              Nutzen Sie BILD.de mit Tracking und Cookies und damit einschließlich personalisierter Werbung. Details zu Datenverarbeitungen, eingesetzten Drittanbietern und Tracking-Technologien wie Cookies sowie zur Übermittlung in Drittländer finden Sie unten sowie in
              </p>
              <a 
                href="#" 
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-sm"
              >
                More...
              </a>
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
                src="/bb-bg.png" 
                alt="dash" 
                className="relative z-0 w-full max-w-md h-auto rounded-lg object-cover"
                width={400}
                height={400}
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
                src="/bb-bg.png" 
                alt="dashh" 
                className="relative z-0 w-full max-w-md h-auto rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
            
            {/* Text Content */}
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
              dafür mit Tracking und Cookies
              </h2>
              <p className="text-gray-700 mb-6">
              Mit Tracking und Cookies nutzen: Wenn Sie sich dafür entscheiden, unser Angebot kostenfrei, dafür mit Tracking und Cookies zu nutzen, verarbeiten wir und bis zu 279 von uns eingesetzte Drittanbieter personenbezogene Daten zu den nachstehenden Verarbeitungszwecken. Dabei werden auch Nutzungsprofile (u.a. auf Basis von Cookie-IDs) erstellt, mit Daten von anderen Webseiten angereichert und auch außerhalb des EWR verarbeitet.  
              Indem Sie auf "Alle akzeptieren" klicken, willigen Sie in die Verarbeitungszwecke und die Übermittlung an die Drittanbieter ein. Dies umfasst auch Ihre Einwilligung in die Übermittlung bestimmter personenbezogener Daten in Drittländer, u.a. die USA, nach Art. 49 (1) (a) DSGVO. Drittländer weisen ggf. kein adäquates Datenschutzniveau entsprechend der DSGVO auf. Dies kann eine erschwerte Durchsetzung von Betroffenenrechten, fehlende Kontrolle der Weiterverarbeitung und Datenübermittlung sowie Zugriffe staatlich
              </p>
              <a 
                href="#" 
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-sm"
              >
                More...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
