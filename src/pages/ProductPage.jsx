import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import image3 from "../assets/Image3.jpg";
import axios from "axios";

export default function ProductPage() {
  // const location = useLocation();
  // const [searchParams] = useSearchParams();
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  
  // Initialize state with both loading and data properties
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    features: [],
    specifications: {},
    // Add other product properties as needed
  });
  const dummyProductData = {
    name: "Premium Wireless Headphones",
    price: "299.99",
    description: "High-fidelity wireless headphones with active noise cancellation, featuring premium audio quality and extended battery life.",
    stock: "45",
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Bluetooth 5.0",
      "Quick charge - 5 hours playback from 10 minutes charge",
      "Built-in voice assistant support",
      "Multipoint pairing"
    ],
    specifications: {
      brand: "AudioTech",
      model: "WH-2000XM4",
      color: "Midnight Black",
      weight: "254g",
      driver: "40mm",
      frequency: "20Hz - 20kHz",
      impedance: "47 ohms",
      connectivity: ["Bluetooth", "3.5mm jack"],
      batteryCapacity: "3000mAh",
      chargingTime: "3 hours",
      warranty: "2 years"
    },
    categories: ["Electronics", "Audio", "Headphones"],
    images: [
      "/images/headphones-main.jpg",
      "/images/headphones-side.jpg",
      "/images/headphones-case.jpg"
    ],
    ratings: {
      average: 4.5,
      count: 128
    },
    sku: "WH2000XM4-BLK",
    availability: true,
    discountPercentage: 10,
    tags: ["wireless", "noise-cancelling", "premium audio", "bluetooth"]
  };

  // Use useEffect to set the dummy data when component mounts
  useEffect(() => {
    setProductData(dummyProductData);
  }, []);
  // Get product URL and data from navigation state
  // const productUrl = location.state?.productUrl;
  // const initialData = location.state?.productData;
  // const queryParam = searchParams.get('query');

  // useEffect(() => {
  //   const fetchProductDetails = async () => {
  //     setIsLoading(true);
  //     setError(null);

  //     try {
  //       // If we already have the data from the search page, use it
  //       if (initialData) {
  //         setProductData(initialData);
  //         setIsLoading(false);
  //         return;
  //       }

  //       // Otherwise fetch the data using the URL
  //       if (productUrl) {
  //         const res = await axios.get('your_api_endpoint', {
  //           params: { url: productUrl },
  //         });
          
  //         if (res.data) {
  //           setProductData(res.data);
  //         } else {
  //           setError('No product data found');
  //         }
  //       } else {
  //         setError('No product URL provided');
  //       }
  //     } catch (err) {
  //       setError(err.message || 'Error fetching product details');
  //       console.error('Error fetching product details:', err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchProductDetails();
  // }, [productUrl, initialData]);

  // if (isLoading) {
  //   return (
  //     <>
  //       <Navbar />
  //       <div className="flex items-center justify-center min-h-screen">
  //         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  //       </div>
  //     </>
  //   );
  // }

  // if (error) {
  //   return (
  //     <>
  //       <Navbar />
  //       <div className="flex items-center justify-center min-h-screen">
  //         <div className="text-red-500 text-center">
  //           <h2 className="text-2xl font-bold mb-2">Error Loading Product</h2>
  //           <p>{error}</p>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen">
        <Hero 
          image={image3} 
          Title={productData.name} 
          buttonTitle="Buy Now"
        >
          <span className="block mb-4 text-sm md:text-base">
            {productData.price}
          </span>
          <span className="block mb-4 text-sm md:text-base">
            {productData.description}
          </span>
          <span
            className={`block mb-4 text-sm md:text-base ${
              productData.stock === "In Stock" ? "text-green-600" : "text-red-600"
            }`}
          >
            {productData.stock}
          </span>
        </Hero>

        <div className="max-w-7xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-2">Product Details</h2>
          <p className="mb-4">{productData.description}</p>

          {productData.features && productData.features.length > 0 && (
            <>
              <h3 className="text-xl font-bold mb-2">Features</h3>
              <ul className="list-disc ml-6">
                {productData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {productData.specifications && Object.keys(productData.specifications).length > 0 && (
            <>
              <h3 className="text-xl font-bold mt-4 mb-2">Specifications</h3>
              <ul className="list-disc ml-6">
                {Object.entries(productData.specifications).map(([key, value], index) => (
                  <li key={index}>{`${key}: ${value}`}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}