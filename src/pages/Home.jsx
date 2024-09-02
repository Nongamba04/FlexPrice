import styled from "styled-components";
import image from "../assets/image.png";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import image2 from "../assets/Image2.jpg";
import image3 from "../assets/Image3.jpg";
import Faqs from "../components/FAQs";

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
  font-weight: bold;
  font-size: 4rem;
  color: #fff;
  padding: 2rem;
  gap:15px;

  @media (max-width: 768px) {
    height: 30vh;
    font-size: 2rem;
  }
`;
export default function Home() {
  return (
    <>
      <Navbar />
      <Title image={image}>
        DYNAMIC PRICING PLATFORM
        <Button text={"Learn More"} />
      </Title>

      <Hero
        image={image2}
        Title={"Real Time Data integration for dynamic pricing"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sint
        quo laboriosam porro suscipit? Corrupti, harum omnis deserunt esse
        dolore modi, est mollitia quisquam a iure blanditiis, aut illo mo.
      </Hero>

      <Hero
        image={image3}
        Title={
          "Simulate Pricing Strategies and Analyze Financial Impact with Ease."
        }
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sint
        quo laboriosam porro suscipit? Corrupti, harum omnis deserunt esse
        dolore modi, est mollitia quisquam a iure blanditiis, aut illo molestiae
        officia saepe aspernatur ducimus voluptates. Ad exercit.
      </Hero>

      <Faqs/>
      
      <Footer/>

    </>
  );
}
// nangu bhai bsdk