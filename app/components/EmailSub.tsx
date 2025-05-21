import React from 'react'

const EmailSub = () => {
  return (
    <div>
        <div className="py-12 bg-indigo-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-800/90"></div>
        
        <div className="absolute top-12 left-8 w-24 h-24 bg-yellow-400 rounded-full opacity-10"></div>
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-red-500 rounded-full opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join To Our Email Newsletter
          </h2>
          <p className="text-white text-lg opacity-90 max-w-2xl mx-auto mb-8">
            And get exclusive discounts just for you.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="E-posta adresinizi giriniz"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-white text-indigo-900 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailSub
