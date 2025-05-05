import React from 'react'

const Subscription = () => {
    const plans = [
        {
          name: "Basic",
          price: "$9/mo",
          features: ["1 User", "10GB Storage", "Email Support"],
        },
        {
          name: "Pro",
          price: "$19/mo",
          features: ["5 Users", "50GB Storage", "Priority Support"],
          highlighted: true,
        },
        {
          name: "Enterprise",
          price: "$49/mo",
          features: ["Unlimited Users", "200GB Storage", "Phone Support"],
        },
      ]
    
    return (
        <div className="py-16 px-4 bg-gray-50 mx-5 my-5">
          <h2 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 shadow-md border-2 border-first ${
                  plan.highlighted ? "bg-indigo-600 text-white scale-105" : "bg-white"
                } transition transform hover:scale-105`}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      ✅ <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-md font-medium ${
                    plan.highlighted
                      ? "bg-white text-indigo-600 hover:bg-gray-100"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      )
  
}

export default Subscription
