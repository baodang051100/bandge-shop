import React from 'react';
import HomeItems from '../../components/home_items/home_items/home_items';
import HomeProduct from '../../components/home_items/home_product/Home_product';
import Slider from '../../components/slider/slider';
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <div><Slider /></div>
      <div><HomeItems /></div>
      <div><HomeProduct /></div>
    </div>
  )
}