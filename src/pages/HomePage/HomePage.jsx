import React from "react";
import Header from "../../components/Header";
import ServiceCard from "../../components/ServiceCard";
import PopularCategories from "../../components/PopularCategories";
import PopularProducts from "../../components/PopularProducts";
import DiscountBannar from "../../components/DiscountBannar";
import FeatureProducts from "../../components/FeatureProducts";

const HomePage = () => {
  return (
    <div className="home-page">
        <Header/>
        <ServiceCard/>
        <PopularCategories/>
        <PopularProducts/>
        <DiscountBannar/>
        <FeatureProducts/>
    </div>
  );
};

export default HomePage;
