import styled from "styled-components"
import image from '../assets/image.png'
import Button from '../components/Button'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import image2 from "../assets/Image2.jpg";

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
  font-weight:bold;
  font-size: 4rem;
  color: #fff;
  padding: 2rem;

  @media (max-width:768px){
  height: 30vh;
  font-size: 2rem
  }
`;
export default function Home(){
    return(
        <>
            <Navbar/>
            <Title image={image}>DYNAMIC PRICING PLATFORM
                <Button text={"Learn More"}/>
            </Title>
            <Hero image={image2}>
            <div>
              <h1 className="text-4xl font-bold">Real Time Data integration for dynamic pricing</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci sint quo laboriosam porro suscipit? Corrupti, harum
                omnis deserunt esse dolore modi, est mollitia quisquam a iure
                blanditiis, aut illo molestiae officia saepe aspernatur ducimus
                voluptates. Ad exercitationem laborum quia, officiis nobis
                quaerat sit fugiat id tempora rerum nemo dignissimos, quibusdam
                nam beatae, earum in veritatis voluptate sequi repellendus omnis
                incidunt ea consequatur? Repellendus, iure.
              </span>
                <Button text={"Learn More"}/>
            </div>
                </Hero>
        </>
    )
}