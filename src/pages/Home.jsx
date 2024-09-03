import styled from "styled-components";
import Button from "../components/Button";
import SignUpButton from "../components/SignUpButton";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import Faqs from "../components/FAQs";
import Card from "../components/Card";
import image from "../assets/image.png";
import image2 from "../assets/Image2.jpg";
import image3 from "../assets/Image3.jpg";
import image5 from "../assets/Image5.png";

const Title = styled.section`
  width: 100%;
  height: 50vh; /* Ensure it takes up the full viewport height */
  background-image: url(${(props) => props.image});
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
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

  & h1 {
    font-weight: bold;
    font-size: 4rem;
  }

  & h2 {
    font-size: 1rem;
  }
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <Title image={image}>
        <h1>DYNAMIC PRICING PLATFORM</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          aperiam blanditiis dolores?
        </h2>
        <div className="flex gap-10">
          <Button text={"Learn More"} />
          <SignUpButton />
        </div>
      </Title>

      <Hero
        image={image2}
        Title={"Real Time Data integration for dynamic pricing."}
        direction={"left"}
      >
        <span className="block mb-4 text-sm md:text-base text-wrap">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          sint quo laboriosam porro suscipit? Corrupti, harum omnis deserunt
          esse dolore modi, est mollitia quisquam a iure blanditiis, aut illo
          mo.
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
        direction={"right"}
      >
        <span className="block mb-4 text-sm md:text-base text-wrap">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          sint quo laboriosam porro suscipit? Corrupti, harum omnis deserunt
          esse dolore modi, est mollitia quisquam a iure blanditiis, aut illo
          mo.
        </span>
      </Hero>
      <Hero2
        image={image5}
        Title={
          "Simulate Pricing Strategies and Analyze Financial Impact with Ease."
        }
        direction={"left"}
      >
        <span className="block mb-4 text-sm md:text-base text-wrap">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          sint quo laboriosam porro suscipit? Corrupti, harum omnis deserunt
          esse dolore modi, est mollitia quisquam a iure blanditiis, aut illo
          mo.
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
}
// nangu bhai bsdk
