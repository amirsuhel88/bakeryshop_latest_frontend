import React from "react";
// import Header from "../../widget/Components/Header.js";
import Footer from "../../widget/Components/Footer";
import Content from "../Content/Content.js";
import Navbar from "../../widget/Components/Navbar.js";
//import UpDown from "../../widget/Components/UpDown/UpDown.js";
//import AddToCartButton from "../../widget/Components/AddToCartButton/AddToCartButton.js";
import HeroSection from "../../widget/Components/HeroSection/HeroSection.js";
import "../../App.css";
import CardsComponent from "../../widget/Components/CardsComponent/CardsComponent.js"
import AddToCartButton from "../../widget/Components/AddToCartButton/AddToCartButton.js"

function Home() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div>
          {/* <Header /> */}

          <Navbar/>
          <HeroSection/>
          <CardsComponent/>
          <Content />
          {/* <UpDown/>
          <AddToCartButton/> */}
          <AddToCartButton/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
