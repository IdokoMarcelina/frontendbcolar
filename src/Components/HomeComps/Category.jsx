import styled from "styled-components";
import CategoryProps from "../../Reuseables/categoryProps";

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

import { CiSearch } from "react-icons/ci";


const Category = () => {
    return ( <CategoryDiv>
        <h2>Explore by Category</h2>

        <input type="search"  id="searchHidden" placeholder={`${<CiSearch />} Search` } />

        <CategoryFlex>

          

          <Sidebar/>

          <ExploreDiv>
          <CategoryProps image ={Barber} title = "Barbers" />
          <CategoryProps image ={Bricklayer} title = "Bricklayers" />
          <CategoryProps image ={Carpenter} title = "Carpenters" />
          <CategoryProps image ={Electrician} title = "Electricians" />
          <CategoryProps image ={Hairdresser} title = "Hairdressers" />
          <CategoryProps image ={Mechanic} title = "Mechanics" />
          <CategoryProps image ={Painter} title = "Painters" />
          <CategoryProps image ={Solar} title = "Solar Engineers" />
          <CategoryProps image ={Tailor} title = "Tailors" />
          <CategoryProps image ={Welder} title = "Welders" />
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
const CategoryFlex = styled.div`
  display: flex;
  margin: 30px auto;
  padding: 40px;
  justify-content: space-around;

`