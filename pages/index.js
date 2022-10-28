import React from "react";
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
} from "../components/componentsindex";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the all outstanding NFTs accross all categories"
      />
        <Filter />
      <Title
        heading="Browse By Category"
        paragraph="Explore the NFTs in most featured categories"
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
