import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import Button from "../components/Button";
import SignUpButton from "../components/SignUpButton";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import Faqs from "../components/FAQs";
import Card from "../components/Card";
import PricingCard from "../components/Pricing_Card";
import image from "../assets/image.png";
import image2 from "../assets/Image2.jpg";
import image3 from "../assets/Image3.jpg";
import image5 from "../assets/Image5.png";

const Title = styled.section`
  width: 100%;
  height: 50vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  padding: 2rem;
  gap: 10px;

  @media (max-width: 768px) {
    height: 30vh;
    font-size: 2rem;
  }
`;

const HomeContent = () => (
  <>
    <Navbar />
    <Title image={image}>
      <div className="flex items-center justify-between gap-2">
        <div>
          <h1 className="font-bold text-[1em] md:text-[4em]">
            DYNAMIC PRICING PLATFORM
          </h1>
          <h2 className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            aperiam blanditiis dolores?
          </h2>
          <div className="flex gap-10">
            <Button text={"Learn More"} />
            <SignUpButton />
          </div>
        </div>
        <PricingCard/>

      </div>
    </Title>

    <Hero
      image={image2}
      Title={"Real Time Data integration for dynamic pricing."}
      direction={"up"}
    >
      <span className="block mb-4 text-sm md:text-base text-wrap">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sint
        quo laboriosam porro suscipit? Corrupti, harum omnis deserunt esse
        dolore modi, est mollitia quisquam a iure blanditiis, aut illo mo.
      </span>

      <div className="flex gap-3 items-center">
        <Card Heading={"Powerful Analytics"} />
        <Card Heading={"Competitor Price Monitoring"} />
      </div>
    </Hero>

    <Hero
      image={image3}
      Title={
        "Simulate Pricing Strategies and Analyze Financial Impact with Ease."
      }
      direction={"up"}
    >
      <span className="block mb-4 text-sm md:text-base text-wrap">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sint
        quo laboriosam porro suscipit? Corrupti, harum omnis deserunt esse
        dolore modi, est mollitia quisquam a iure blanditiis, aut illo mo.
      </span>
    </Hero>

    <Hero2
      image={image5}
      Title={
        "Simulate Pricing Strategies and Analyze Financial Impact with Ease."
      }
      direction={"down"}
    >
      <span className="block mb-4 text-sm md:text-base text-wrap">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sint
        quo laboriosam porro suscipit? Corrupti, harum omnis deserunt esse
        dolore modi, est mollitia quisquam a iure blanditiis, aut illo mo.
      </span>

      <div className="flex gap-3 items-center">
        <Card Heading={"Powerful Analytics"} />
        <Card Heading={"Competitor Price Monitoring"} />
      </div>
    </Hero2>

    <Faqs />
    <Footer />
  </>
);

export default function Home() {
  const navigate = useNavigate();
  const [cookies] = useCookies(["user"]);

  useEffect(() => {
    // Check if user is not authenticated
    if (!cookies.user) {
      navigate("/register");
    }
  }, [cookies.user, navigate]);

  // Show loading state while checking authentication
  if (!cookies.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Render main content if authenticated
  return <HomeContent />;
}
