import styled from "styled-components";
import HeroImg from "../../assets/hero.png"
import Hero1 from "../../assets/heroEng.avif"
import Hero2 from "../../assets/heroTai.jpg"
import SignButton from "../../Reuseables/SignButton";

import { IoMdHammer } from "react-icons/io";
import { GiStakeHammer } from "react-icons/gi";
import { FaTape } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";


const Hero = () => {
    return ( <HeroDiv>
       
    <HeroLeft>
    <div className="icons">
        <div className="heroIcon" id="icon1">
            <IoMdHammer />
        </div>
        <div className="heroIcon" id="icon2">
                <GiStakeHammer />
            </div>
            <div className="heroIcon" id="icon3">
                <FaTape />
            </div>
            <div className="heroIcon" id="icon4">
                <HiOutlineWrenchScrewdriver />
            </div>
    </div>
      
        <div className="herotext">
            <h2>Bringing People and Crafts Together.</h2>
            <h3>A Dynamic Platform for Artisans to Showcase their Skills and Connect with Clients.</h3>
            <h3> Your Next Job or Worker is Just a Click Away.</h3>
        </div>

        <div className="buttons">
            <SignButton Title="Sign Up as Artisan"/>
            <SignButton Title="Sign Up as User"/>
        </div>
        
    </HeroLeft>
    <HeroRight >
            <img src={Hero2} alt=""   id="hero2"/>
            {/* <img src={Hero1} alt="" id="hero3" /> */}
        </HeroRight>

    {/* <HeroRight><img src={HeroImg} alt="" /></HeroRight> */}
    </HeroDiv> );
}
 
export default Hero;
const HeroDiv = styled.div`
    background-color: #E1E7F3 ;
    text-align: center;
    max-width: 100vw;
    padding: 20px;
    color: #0000ff;
    height: calc(100vh - 80px);
    border-radius: 0px 0px 50px 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1440px;
    margin:  auto;

    .buttons{
        max-width: 350px;
        margin: auto;
       display: flex;
       justify-content: space-between;
    }
     #hero2{
        width: 350px;
        height: 350px;
        border-radius:25px;
    }
    .heroIcon{
        color: #e3dfdf;
        font-size: 35px;
        width: 50px;
        height: 50px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        border: 2px solid ;
        margin: 0;
    }
    #icon1{
        left: 150px ;
        top: 90px
    }
    #icon2{
        left: 150px ;
        top: 490px;
    }
    #icon3{
        left: 950px ;
        top: 90px
    }
    #icon4{
        left: 950px ;
        top: 490px;
    }
    @media (max-width: 1030px) {
     #hero2{
        width: 300px;
        height: 300px;
      }
      .heroIcon{
        display: none;
      }
    }
    @media (max-width: 870px) {
        #hero1, #hero2, #hero3{
        width: 250px;
        height: 250px;
      }
    }
    @media (max-width: 790px) {
       flex-direction: column;
       justify-content: start;
       gap: 30px;
       padding: 10px;
       height: fit-content;
       #hero2{
        width: 350px;
        height: 350px;      
    }
       .buttons{
        width: 320px;
       }
    }
`
const HeroLeft = styled.div`
        display: flex;
        flex-direction: column;
        gap: 30px;
    h2{
        font-size: 55px;
        max-width: 650px;
    }
    h3{
        font-size: 20px;
        font-weight: 500;
        max-width: 450px;
        margin: 0px auto 10px;
    }
    @media (max-width: 1020px) {
        h2{
            font-size: 50px;
            line-height: 60px;
        }
    }
    @media (max-width: 970px) {
        h2{
            font-size: 45px;
            line-height: 55px;
        }
        h3{
            font-size: 18px;
        }
    }
        @media (max-width: 920px) {
        h2{
            font-size: 42px;
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
        h2{
            font-size: 55px;
            line-height: 65px;
        }
        h3{
        font-size: 20px;
        max-width: 450px;
        }
    }
    @media (max-width: 620px) {
        h2{
            font-size:40px;
            line-height: 55px;
        }
    }
    @media (max-width: 510px) {
        h2{
            font-size: 35px;
        }
        h3{
        font-size: 16px;
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
