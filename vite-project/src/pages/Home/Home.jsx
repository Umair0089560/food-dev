import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExplorMenu from '../../components/ExplorMenu/ExplorMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Phone from '../../components/Phone/Phone'
import Testimonials from '../../components/testimonials/Testimonials'
const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
        <Header />
        <ExplorMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <Phone />
        <Testimonials/>
    </div>
  )
}

export default Home