import { Link } from "react-router-dom";
import styled from "styled-components";

import Barber from "../../assets/categories/barber.jpg"
import Bricklayer from "../../assets/categories/bricklayer.jpg"
import Carpenter from "../../assets/categories/carpenter.jpg"
import Electrician from "../../assets/categories/electrician.jpg"
import Hairdresser from "../../assets/categories/hairdresser.jpg"
import Mechanic from "../../assets/categories/mechanic.jpg"
import Painter from "../../assets/categories/painter.jpg"
import Solar from "../../assets/categories/solar.jpg"
import Tailor from "../../assets/categories/tailor.jpg"
import Welder from "../../assets/categories/welder.jpg"
import Sidebar from "./Sidebar";

const categories = [
  { title: "Barbers", image : Barber, element: "barber" },
  { title: "Bricklayers", image: Bricklayer, element: "bricklayer" },
  { title: "Carpenters", image: Carpenter, element: "carpenter" },
  { title: "Electricians", image: Electrician, element: "electrician" },
  { title: "Hairdressers", image: Hairdresser, element: "hairdresser" },
  { title: "Mechanics", image: Mechanic, element: "mechanic" },
  { title: "Painters", image: Painter, element: "painter" },
  { title: "Solar Engineers", image: Solar, element: "solar engineer" },
  { title: "Tailors", image: Tailor,  element: "tailor" },
  { title: "Welders", image: Welder,  element: "welder" },
];

const Category = () => {
  return ( <CategoryDiv>
    <h2>Explore by Category</h2>

    <input type="search"  id="searchHidden" placeholder="Search" />

  <CategoryFlex>

    <Sidebar/>

    <ExploreDiv >

      {categories.map((category) => (
          <CategoryCard key={category.element}>
            <Link to={`/categories/${category.element}`}>
              <ImageBox><img src={category.image} alt={category.title} /></ImageBox>
              <h6>{category.title}</h6>
            </Link>
          </CategoryCard>
        ))}
      </ExploreDiv>

  </CategoryFlex>

    </CategoryDiv> );
}
 
export default Category;

const CategoryDiv = styled.div`
  padding: 20px;
  margin: 50px auto 0px;
  color: #0000ff;
  max-width: 1440px;

  #searchHidden{
    width: 250px;
    height: 50px;
    margin: 15px auto 5px;
    border-radius: 10px;
    border: none;
    background-color: #e7e7e7;
    display: none;
    padding: 10px;
    @media (max-width:890px) {
   display: block;
  }   
  }
  h2{
    font-size: 35px;
    width: fit-content;
    margin:  auto;
    @media (max-width:720px) {
      font-size: 28px;
    }
    @media (max-width:420px) {
      font-size: 22px;
    }
  }
`
const ExploreDiv = styled.div`
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 40px;
  @media (max-width:890px) {
    max-width: 100%;
    justify-content: space-between;
  }
  @media (max-width:680px) {
    justify-content: center;
  }
`
const CategoryCard = styled.div`
 height: 320px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 20px;
  &:hover{
    transform: scale(1.05); 
    transition: transform 0.3s ease-in-out;
  }  
  a {
    text-decoration: none;
    color: inherit;
  }
  h6{
    font-size: 24px;
    margin: 10px auto;
    text-align: center;
  }
  @media (max-width:1050px) {
    width: 280px ;
    height: 270px;
  }
  @media (max-width:1000px) {
    width: 260px ;
    height: 240px;
  }
  @media (max-width:950px) {
    width: 230px ;
    height: 200px;
  }
  @media (max-width:890px) {
    width: 350px;
    height: 320px;
  }
  @media (max-width:860px) {
    width: 320px ;
    height: 290px;
  }
  @media (max-width:800px) {
    width: 280px ;
    height: 270px;
  }
  @media (max-width:720px) {
    width: 260px ;
    height: 240px;
  }
  @media (max-width:680px) {
    width: 350px;
    height: 320px;
  }
  @media (max-width:430px) {
    width: 300px;
    height: 280px;
  }
`
const ImageBox = styled.div`
  width: 350px;
  height: 250px;
  @media (max-width:1050px) {
    width: 280px ;
    height: 210px;
  }
  @media (max-width:1000px) {
    width: 260px ;
    height: 190px;
  }
  @media (max-width:950px) {
    width: 230px ;
    height: 150px;
  }
  @media (max-width:890px) {
    width: 350px;
    height: 250px;
  }
  @media (max-width:860px) {
    width: 320px ;
    height: 240px;
  }
  @media (max-width:800px) {
    width: 280px ;
    height: 220px;
  }
  @media (max-width:720px) {
    width: 260px ;
    height: 190px;
  }
  @media (max-width:680px) {
    width: 350px;
    height: 250px;
  }
  @media (max-width:430px) {
    width: 300px;
    height: 220px;
  }
  img{
    width: 100%;
    height: 99%;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;

  }
`
const CategoryFlex = styled.div`
  display: flex;
  margin: 30px auto;
  padding: 40px;
  justify-content: space-around;
`