import Category from "../Components/HomeComps/Category";
import Faq from "../Components/HomeComps/Faq";
import Hero from "../Components/HomeComps/Hero";
import Steps from "../Components/HomeComps/Steps";
import Why from "../Components/HomeComps/Why";
// import Category from "../Components/HomeComps/Category";

const LandingPage = () => {
  return ( <div>
    <Hero/>
    <Category/>
    <Why/>
    <Steps/>
    <Faq/>
  </div> );
}
 
export default LandingPage;