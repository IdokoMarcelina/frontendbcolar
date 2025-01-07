import styled from "styled-components";
const CategoryProps = (props) => {
    return ( <CategoryPropsDiv>
      <ImageBox><img src={props.image} alt={`${props.title}`} /></ImageBox>
      <h6>{props.title}</h6>
    </CategoryPropsDiv> );
}
 
export default CategoryProps;

const CategoryPropsDiv = styled.div`
  height: 320px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 20px;
  &:hover{
    transform: scale(1.05); 
    transition: transform 0.3s ease-in-out;

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

  img{
    width: 100%;
    height: 99%;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;

  }
`