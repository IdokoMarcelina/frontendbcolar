import styled from "styled-components";
import Hero2 from "../../assets/herooo.png"
import SignButton from "../../Reuseables/SignButton";

const Hero = () => {
    return ( <HeroDiv>   
    <HeroLeft>
      
        <div className="herotext">
            <h2>Bringing People and Crafts Together.</h2>
            <h3>A Dynamic Platform for <span>Artisans</span> to Showcase their Skills and Connect with Clients.</h3>
            <h4> Your Next Job or Worker is Just a Click Away.</h4>
        </div>

        <div className="buttons">
            <SignButton Title="Sign Up as Artisan"/>
            <SignButton Title="Sign Up as User" btnClass="whiteBtn"/>
        </div>
        
    </HeroLeft>
    <HeroRight >
        <img src={Hero2} alt=""   id="heroimg"/>
   </HeroRight>

 </HeroDiv> );
}
 
export default Hero;

const HeroDiv = styled.div`
    background-color: #F5F5F7 ;
    max-width: 100vw;
    padding: 50px;
    color: #181444;
    height: calc(100vh - 80px);
    border-radius: 0px 0px 50px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:  75px 0px;

    .buttons{
        max-width: 350px;
        margin: 0px  ;
       display: flex;
       justify-content: space-between;
    }
     #heroimg{
        width: 550px;
    }
    .whiteBtn{
        background-color: transparent;
        color: #181444;
        border: 1px solid;
    }
    @media (max-width: 1030px) {
     #heroimg{
        width: 380px;
      }
    }
    @media (max-width: 870px) {
        #heroimg{
        width: 320px;
      }
    }
    @media (max-width: 790px) {
       flex-direction: column;
       align-items: center;
       text-align: center;
       gap: 30px;
       padding: 10px;
       height: fit-content;
       margin: auto;
       #heroimg{
        width: 450px;
    }
       .buttons{
        width: 320px;
        margin: 0px auto ;
       }
    }
    @media (max-width: 600px) {
     #heroimg{
        width: 380px;
      }
    }
    @media (max-width: 470px) {
     #heroimg{
        width: 290px;
      }
    }
`
const HeroLeft = styled.div`
        display: flex;
        flex-direction: column;
        max-width: 650px;
        span{
            color: red;
        }
    .herotext{
        max-width: 500px;
    }
    h2{
        font-size: 45px;
        max-width: 650px;
    }
    h3,h4{
        font-size: 16px;
        font-weight: 500;
        max-width: 400px;
    }
    h4{
        margin-top: 70px;
    }
    @media (max-width: 1020px) {
        h2{
            font-size: 45px;
            line-height: 60px;
        }
    }
    @media (max-width: 970px) {
        h2{
            font-size: 40px;
            line-height: 55px;
        }
        h3{
            font-size: 18px;
        }
    }
        @media (max-width: 920px) {
            max-width: 400px;

        h2{
            font-size: 35px;
            line-height: 50px;
        }
    }
    @media (max-width: 870px) {
        h2{
            font-size: 38px;
            line-height: 50px;
        }
        h3{
            font-size: 16px;
            max-width: 350px;
        }
    }
    @media (max-width: 790px) {
        max-width: 600px;
        .herotext{
        max-width:700px;
    }
        h2{
            font-size: 45px;
            line-height: 65px;
        }
        h3, h4{
        font-size: 18px;
        max-width: 400px;
        }
    }
    @media (max-width: 620px) {
       
        h2{
            font-size:38px;
            line-height: 50px;
        }
    }
    @media (max-width: 510px) {
        h2{
            font-size: 35px;
        }
        h3, h4{
        font-size: 16px;
        max-width: 320px;
    }
}
@media (max-width: 430px) {
        h2{
            font-size: 32px;
            line-height: 42px;
        }
        h3, h4{
        font-size: 14px;
        max-width: 320px;
    }
}
@media (max-width: 350px) {
        h2{
            font-size: 28px;
        }
        h3, h4{
        font-size: 14px;
        max-width: 320px;
    }
}
`
const HeroRight = styled.div`
    display: flex;
    justify-content: center;
    max-width: 90%;
    gap: 30px;
`
