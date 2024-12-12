import styled from "styled-components";
import CategoryProps from "../../Reuseables/categoryProps";

import Barber from "../assets/categories/barber.jpg"
import Bricklayer from "../assets/categories/bricklayer.jpg"
import Carpenter from "../assets/categories/carpenter.jpg"
import Electrician from "../assets/categories/electrician.jpg"
import Hairdresser from "../assets/categories/hairdresser.jpg"
import Mechanic from "../assets/categories/mechanic.jpg"
import Painter from "../assets/categories/painter.jpg"
import Solar from "../assets/categories/solar.jpg"
import Tailor from "../assets/categories/tailor.jpg"
import Welder from "../assets/categories/welder.jpg"
import Sidebar from "./Sidebar";

const Category = () => {
    return ( <CategoryDiv>
        <h2>Explore by Category</h2>

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
  padding: 30px;
  margin: 50px auto 0px;
  color: #0000ff;
  max-width: 1440px;

  h2{
    font-size: 35px;
    width: fit-content;
    margin:  auto;
  }
`

const ExploreDiv = styled.div`
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 40px;

`
const CategoryFlex = styled.div`
  display: flex;
  margin: 30px auto;
  padding: 40px;
  justify-content: space-around;

`