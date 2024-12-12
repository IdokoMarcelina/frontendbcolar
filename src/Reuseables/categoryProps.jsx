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
  
  h6{
    font-size: 24px;
    margin: 10px auto;
    text-align: center;
  }
`
const ImageBox = styled.div`
  width: 350px;
  height: 250px;

  img{
    width: 100%;
    height: 99%;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;

  }
`