import styled from "styled-components";
import { IoShieldCheckmark } from "react-icons/io5";

const WhyProps = (props) => {
    return ( <WhyPropsDiv>
        <p> <span id="check">
                <IoShieldCheckmark />
            </span> 
        <span id="head"> {props.head}</span>: {props.content}</p>
    </WhyPropsDiv> );
}
 
export default WhyProps;

const WhyPropsDiv = styled.div`
    #check{
        color: #0000ff ;
    }
   
    #head{
        font-weight: 600;
    }
`