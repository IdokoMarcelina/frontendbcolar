import styled from "styled-components";

const StepsProps = (props) => {
    return ( <StepsPropsDiv>
        <div id="allStepsDiv">
            <div id="stepDiv">
                <p id="stepsIcon">{props.icon}</p>
                <p id="step"> {props.step}</p>
            </div>
       
            <p id="stepsArrow"> {props.arrow}</p>
            <p id="stepsArrow2"> {props.arrow2}</p>
        </div>

    </StepsPropsDiv> );
}
 
export default StepsProps;

const StepsPropsDiv = styled.div`
    display: flex;
    text-align: center;

    #allStepsDiv{
        display: flex;
        justify-content: space-between;

        @media (max-width:720px) {
            display: block;
          #stepsArrow{
            display: none;
          }  
          #stepsArrow2{
            display: block;
          } 
        }
    }
    #stepDiv{
        @media (max-width:720px) {
            /* align-items: center; */
            gap: 50px;
        }
    }
    #stepsIcon{
        font-size: 150px;
        margin: 0;
        color: #0000ff;
    }
    #step{
        max-width: 200px;
    }
    #stepsArrow2{
        display: none;
    }
    #stepsArrow, #stepsArrow2 {
        font-size: 150px;
        margin: 0;
        color: #8eaae2 ;
        /* border: 1px solid; */
    }
    #stepsArrow, #stepsIcon, #stepsArrow2{
        @media (max-width:1030px) {
            font-size: 100px;
    }
    @media (max-width:950px) {
            font-size: 80px;
    }
    @media (max-width:720px) {
            font-size: 100px;
    }
    @media (max-width:440px) {
            font-size: 110px;
    }
    @media (max-width:340px) {
            font-size: 90px;
    }
    }
`