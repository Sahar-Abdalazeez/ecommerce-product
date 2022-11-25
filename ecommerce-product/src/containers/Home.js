import { Gallery } from "../components/Gallary.jsx";
import { Details } from "../components/Details.jsx";
import styled from "styled-components";
import photo1 from "../assets/images/image-product-1.jpg";
import photo2 from "../assets/images/image-product-2.jpg";
import photo3 from "../assets/images/image-product-3.jpg";
import photo4 from "../assets/images/image-product-4.jpg";

const HomeContainer = styled.div`
  /* height: 100vh; */
  width: 100%;
  padding: 0px 10% 0;
  display: flex;
`;

export const Home = () => {
  const sources = [photo1, photo2, photo3, photo4];

  return (
    <HomeContainer>
      <Gallery optionImages={sources}></Gallery>
      <Details
        oldPrice={"25.00"}
        price={"125.00"}
        company={"sneaker company"}
        title="fall limited edition sneakers"
        description="These low-profile sneakers are your perfect
      casual wear companion .Featuring a durable rubber outer solee .they'll withstand everything the weather can offer.
      "
      />
    </HomeContainer>
  );
};
