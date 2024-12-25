import React from "react";
import { useCookies } from "react-cookie";

const PricingCard = () => {
  const [cookies, setCookie] = useCookies(["user"]);

  const isSubscribed = cookies?.user?.isSubscribe || false;

  const handleClick = () => {
    if (!isSubscribed) {
      setCookie("user", { ...cookies.user, isSubscribe: true });
    }
  };
  return (
    <div className="max-w-xs bg-white rounded-3xl shadow-lg p-6 relative">
      <div className="space-y-4">
        {/* Price Tag */}
        <div className="absolute top-6 right-6">
          <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full">
            $49 <span className="text-gray-500">/ m</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-2">Pro+</h2>

        {/* Description */}
        <p className="text-gray-600">Want updates ahead and new features?</p>

        {/* Features List */}
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <span className="bg-teal-400 p-1 rounded-full">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <span className="text-gray-600">
              <span className="font-medium text-gray-800">
                {" "}
                Better Accuracy
              </span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="bg-teal-400 p-1 rounded-full">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <span className="text-gray-600">
              <span className="font-medium text-gray-800">Fast Updates</span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="bg-teal-400 p-1 rounded-full">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <span className=" font-medium text-gray-600">New features</span>
          </li>
        </ul>

        {/* Action Button */}
        <button
          onClick={handleClick}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-4 rounded-lg mt-6 transition-colors"
          disabled={isSubscribed}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
