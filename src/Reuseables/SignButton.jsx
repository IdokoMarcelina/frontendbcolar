import styled from "styled-components";
const SignButton = (props) => {
    return ( <SignButtonDiv>
        {props.Title}
    </SignButtonDiv> );
}
 
export default SignButton;

const SignButtonDiv = styled.button`
    width: 140px;
    height: 40px;
    border-radius: 25px;
    border: none;
    background-color: #0000ff;

    color: white;
    font-weight: 100;
    margin-right: 20px;
    &:hover{   
        background-color: white ;
        background-color: #4b4bf9;
    }
`