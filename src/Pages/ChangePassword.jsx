import styled from "styled-components";
import { CgPassword } from "react-icons/cg";
import { IoIosArrowRoundBack } from "react-icons/io";

const ChangePassword = () => {
    return ( <ChangePasswordDiv>

        <div>
            <h4><CgPassword /></h4>
            <h3> Change Password </h3>
            {/* <p>Set a new password</p> */}


            <label htmlFor="oldPassword"> Enter old Password:</label>
            <input type="text" id="oldPassword" placeholder=""/>

            <label htmlFor="newPassword"> Set new Password:</label>
            <input type="text" id="newPassword" placeholder=""/>

            <label htmlFor="confirmPassword"> Confirm Password:</label>
            <input type="text" id="confirmPassword" placeholder=""/>

            <button>Reset password</button>
            <h6> <IoIosArrowRoundBack /> Back to log in</h6>
        </div>

    </ChangePasswordDiv> );
}
  
export default ChangePassword;

const ChangePasswordDiv = styled.div`
    width:400px;
    height: 100vh;
    border: 1px solid;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* height: 400px; */
    }
    h4{
        border: 1px solid;
        border-radius: 3px;
        padding: 5px;
        margin: 10px auto;
        width: 45px;
        height: 45px;
        font-size: 32px;
    }
    h3{
        font-size: 22px;
        margin: 5px auto;
    }
    p{
        color: #5e5e61;
    }
    input{
        width: 300px;
        height: 35px;
        border: 1px solid #5e5e61;
        border-radius: 10px;
        padding: 10px;
        margin: 5px 0px;  
    }
    label{
        /* margin: 5px 0px; */
    }
    button{
        width: 300px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: #0000ff;
        color: white;
        font-weight: 600;
        margin: 10px 0px;
    &:hover{   
        background-color: #4b4bf9;
    }    
}
h6{
    font-weight: 500;
    font-size: 16px;
    margin: 15px auto 0px;
}
`