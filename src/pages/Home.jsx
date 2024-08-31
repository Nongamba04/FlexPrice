import styled from "styled-components"
import image from '../assets/image.png'
import Button from '../components/Button'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

const Title = styled.section`
  width: 100%;
  height: 50vh; /* Ensure it takes up the full viewport height */
  background-image: url(${(props) => props.image});
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  display: flex;
  flex-direction : column;
  justify-content: flex-end;
  font-size: 5rem;
  color: #fff;
  padding: 2rem;
`;
export default function Home(){
    return(
        <>
            <Navbar/>
            <Title image={image}>DYNAMIC PRICING PLATFORM
                <Button text={"Learn More"}/>
            </Title>
            <Hero/>
        </>
    )
}