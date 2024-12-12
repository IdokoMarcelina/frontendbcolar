import styled from "styled-components";
import HeroImg from "../assets/hero.png"
import Hero1 from "../assets/heroEng.avif"
import Hero2 from "../assets/heroTai.jpg"
import SignButton from "../../Reuseables/SignButton";

import { IoMdHammer } from "react-icons/io";
import { GiStakeHammer } from "react-icons/gi";
import { FaTape } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";


const Hero = () => {
    return ( <HeroDiv>
        <div >
            <img src={Hero1} alt="" id="hero1" />
        </div>
    <HeroLeft>
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
      
        <h2>Bringing People and Crafts Together</h2>  

        <h3>A Dynamic Platform for Artisans to Showcase their Skills and Connect with Clients</h3>
        <h3> Your Next Job or Worker is Just a Click Away</h3>

        <div className="buttons">
            <SignButton Title="Sign Up as Artisan"/>
            <SignButton Title="Sign Up as User"/>
        </div>
        
    </HeroLeft>
    <div>
            <img src={Hero2} alt=""   id="hero2"/>
        </div>

    {/* <HeroRight><img src={HeroImg} alt="" /></HeroRight> */}
    </HeroDiv> );
}
 
export default Hero;
const HeroDiv = styled.div`
    /* background-color: #e3dfdf; */
    /* background-color: #E0E1E0; */
    /* background-color: #F2F2F2; */
    background-color: #E1E7F3 ;
    text-align: center;
    background-repeat: no-repeat;
    max-width: 100vw;
    padding: 20px;
    color: #0000ff;
    height: calc(100vh - 80px);
    border-radius: 0px 0px 40px 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1440px;
    margin: auto;

    .buttons{
        max-width: 350px;
        margin: auto;
       display: flex;
       justify-content: space-between;
    }
    #hero1, #hero2{
        width: 250px;
        height: 250px;
        border-radius:125px;
        border: 3px solid #0000ff;
        position: relative;
    animation: slide 2s linear  infinite alternate;
   
    @keyframes slide {
        0% {top: 0px;}
        50% {top: 10px;}
        100% {top: 20px;}
        }

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
        left: 280px ;
        top: 420px
    }
    #icon2{
        left: 280px ;
        top: 100px;
    }
    #icon3{
        left: 950px ;
        top: 100px
    }
    #icon4{
        left: 950px ;
        top: 420px;
    }

    @media (max-width: 750px) {
       flex-direction: column;
       justify-content: center;
       gap: 30px;
       padding: 10px;

       .buttons{
        width: 320px;
       }
    }
`
const HeroLeft = styled.div`
    h2{
        font-size: 60px;
        /* line-height: 85px; */
        max-width: 650px;
        /* margin: 0; */
    }
    h3{
        font-size: 20px;
        font-weight: 500;
        max-width: 750px;
    }
    @media (max-width: 900px) {
        h2{
            font-size: 50px;
            line-height: 70px;
        }
    }
        @media (max-width: 790px) {
        h2{
            font-size: 45px;
            line-height: 65px;
        }
    }
    @media (max-width: 750px) {
        h2{
            font-size: 60px;
            line-height: 75px;
            max-width: 600px;
            text-align: center;
        }
    }
    @media (max-width: 600px) {
        h2{
            font-size: 40px;
            line-height: 65px;
        }
    }
    @media (max-width: 500px) {
        h2{
            font-size:30px;
            line-height: 55px;
        }
    }

`
// const HeroRight = styled.div`
//     img{
//         height: 450px;
//     }
// `
