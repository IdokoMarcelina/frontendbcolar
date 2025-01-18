import styled from "styled-components";
const SignButton = (props) => {
    return ( <SignButtonDiv className={`${props.btnClass}`}>
        {props.Title}
    </SignButtonDiv> );
}
 
export default SignButton;

const SignButtonDiv = styled.button`
    width: 160px;
    height: 40px;
    border-radius: 14px;
    border: none;
    background-color: #0000ff;
    color: white;
    font-weight: 100;
    margin-right: 20px;
    transition: all 0.3s ease;
    &:hover{   
        background-color: white;
        color: #0000ff;
        border: 1px solid;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }
`