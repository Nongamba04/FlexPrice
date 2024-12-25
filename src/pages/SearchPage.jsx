import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import { nanoid } from 'nanoid'; 
import Navbar from "../components/Navbar";

export default function SearchPage() {
  const [formState, setFormState] = useState({
    amazon_link: "",
    flipkart_link: "",
    error: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [requestId, setRequestId] = useState(null);
  const [callbackData, setCallbackData] = useState(null);
  const navigate = useNavigate();

  const validateURL = (url) => {
    try {
      return new URL(url);
    } catch {
      return false;
    }
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
      error: "", 
    }));
  };

  const handleCopy = (value, fieldName) => {
    if (value) {
      navigator.clipboard.writeText(`http://${value}`);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const postData = async () => {
    const uniqueId = nanoid();

    setRequestId(uniqueId);
    setFormState((prev) => ({ ...prev, error: "" }));
    setIsLoading(true);

    const isAmazonValid = formState.amazon_link.trim() && validateURL(formState.amazon_link);
    const isFlipkartValid = formState.flipkart_link.trim() && validateURL(formState.flipkart_link);

    if (!isAmazonValid || !isFlipkartValid) {
      setFormState((prev) => ({
        ...prev,
        error: "Please enter valid URLs for both Amazon and Flipkart",
      }));
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/products/api/process", {
        amazon_link: formState.amazon_link,
        flipkart_link: formState.flipkart_link,
        requestId: uniqueId
      }, {
        headers: { "Content-Type": "application/json" },
        timeout: 30000,
      });


      if (res.data) {
        setCallbackData(res.data);
      } else {
        setFormState((prev) => ({
          ...prev,
          error: "No results found for this product",
        }));
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.response
          ? `Server error: ${err.response.status}`
          : err.request
          ? "No response from server. Please try again."
          : "An unexpected error occurred";

      setFormState((prev) => ({ ...prev, error: errorMessage }));
    } finally {
      setIsLoading(false);
    }
  };

  
  useEffect(() => {
    if (requestId) {
      const interval = setInterval(async () => {
        try {
          const response = await axios.get(`/api/callback-data/${requestId}`);
         
          if (response.data.flag === 1) {
            setCallbackData(response.data);
            clearInterval(interval); 
            navigate("/productResult", {
              state: {
                amazonUrl: formState.amazon_link,
                flipkartUrl: formState.flipkart_link,
                productData: response.data,
              },
              search: `?query=${encodeURIComponent(response.data.name || "product")}`,
            });
          }
          else{
            setIsLoading(true);
          }

        } catch (error) {
          console.error('Error fetching callback data:', error);
        }
      }, 5000);

      return () => clearInterval(interval); 
    }
  }, [requestId]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 gap-3">
        <h1 className="text-white text-xl">Search any product & Compare</h1>
        <div className="flex flex-col items-center w-[50rem] h-[30rem] rounded-md border border-white shadow-lg bg-white/10">
          {formState.error && <div className="text-red-500 text-sm mt-2">{formState.error}</div>}
          {['amazon_link', 'flipkart_link'].map((name) => (
            <div key={name} className="flex justify-between w-[500px] h-[50px] border-2 border-black shadow-sm">
              <input className="flex-1 px-2.5" placeholder={`Paste ${name.split('_')[0].toUpperCase()} URL`} name={name} value={formState[name]} onChange={handleInput} />
              <span onClick={() => handleCopy(formState[name], name)}>🔗 {copiedField === name ? "COPIED!" : "COPY"}</span>
            </div>
          ))}
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={postData} disabled={isLoading}>{isLoading ? "Searching..." : "Search"}</button>
        </div>
      </div>
    </>
  );
}
