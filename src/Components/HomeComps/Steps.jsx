import styled from "styled-components";
import StepsProps from "../../Reuseables/StepsProps";

import { TbCircleDashedNumber1, TbCircleDashedNumber2, TbCircleDashedNumber3, TbArrowBigRightLinesFilled, TbArrowBigDownLinesFilled } from "react-icons/tb";

const Steps = () => {
    return ( <StepsDiv>
        <h3>Get Started in 3 Simple Steps</h3>
        <StepsAll>
            <StepsProps icon ={<TbCircleDashedNumber1 />} step="Select a worker based on price, skills, and reviews." arrow={<TbArrowBigRightLinesFilled />} arrow2={<TbArrowBigDownLinesFilled />}/>
            <StepsProps icon ={<TbCircleDashedNumber2 />} step="Schedule a worker as soon as today." arrow={<TbArrowBigRightLinesFilled />} arrow2={<TbArrowBigDownLinesFilled />}/>
            <StepsProps icon ={<TbCircleDashedNumber3 />} step="Chat, pay, tip, and review—all in one place." />
        </StepsAll>

    </StepsDiv> );
}
 
export default Steps;

const StepsDiv= styled.div`
    margin:  auto;
    background-color: #e3dfdf;
    background-color: #E1E7F3 ;
    padding: 20px;

    h3{
        text-align: center;
        color: #0000ff;
        font-size: 35px;
        @media (max-width:720px) {
            font-size: 28px;
        }
        @media (max-width:420px) {
            font-size: 22px;
        }

    }
`

const StepsAll = styled.div`

    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin:  auto;
    margin-top: 50px;
    margin-bottom: 30px;
    padding: 20px;
    @media (max-width:950px) {
       gap: 30px;
    }
    @media (max-width:720px) {
     flex-direction: column;

    }
    @media (max-width:420px) {
     height: 850px;
    }
`