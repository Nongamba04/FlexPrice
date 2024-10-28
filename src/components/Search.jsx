import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Search({ wantSearch }) {
  
  

 

  //Check which retailer the link corresponds to
  const getRetailerName = (url) => {
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname.toLowerCase();

      //retailer domains
      const retailers = {
        amazon: ["amazon.com", "amazon.in", "amazon.co.uk", "amazon.ca"],
        flipkart: ["flipkart.com"],
      };

      // Check for each retailer
      for (const [retailer, domains] of Object.entries(retailers)) {
        if (domains.some((domain) => hostname.includes(domain.split(".")[0]))) {
          // Capitalize first letter
          return retailer.charAt(0).toUpperCase() + retailer.slice(1);
        }
      }

      // If no match found, extract the main domain name
      const domainParts = hostname.split(".");
      if (domainParts.length >= 2) {
        const mainDomain = domainParts[domainParts.length - 2];
        return mainDomain.charAt(0).toUpperCase() + mainDomain.slice(1);
      }

      return "Unknown Retailer";
    } catch (error) {
      console.error("Error parsing URL:", error.message);
      return "Invalid URL";
    }
  };

  

 
  return (
    <>
      {/* Search Bar for Desktop View */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/3">
        <div className="flex w-full">
          <input
            type="url"
            placeholder="Paste product URL"
            className="p-2 rounded-l-lg w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query.product_link}
            onChange={handleInput}
          />
         
        </div>
        {query.error && (
          <p className="text-red-500 text-sm mt-2 self-start">{query.error}</p>
        )}
      </div>

      {/* Search Bar for Mobile View */}
      <div className="md:hidden w-full">
        <div
          className={`
            fixed left-0 right-0 
            transition-all duration-500 ease-in-out 
            bg-transparent 
            ${wantSearch ? "top-16 opacity-100" : "-top-full opacity-0"}
          `}
        >
          <div className="p-4 flex flex-col gap-2">
            <div className="flex w-full">
              <input
                type="url"
                placeholder="Paste product URL"
                className="p-2 rounded-l-lg w-full text-gray-800 border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={query.product_link}
                onChange={handleInput}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg transition duration-200 disabled:bg-blue-300 flex items-center"
                onClick={postData}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Searching...
                  </span>
                ) : (
                  "Search"
                )}
              </button>
            </div>
            {query.error && (
              <p className="text-red-500 text-sm">{query.error}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
