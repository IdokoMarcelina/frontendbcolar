
import Category from "../Components/HomeComps/Category";
import Faq from "../Components/HomeComps/Faq";
import Hero from "../Components/HomeComps/Hero";
import Steps from "../Components/HomeComps/Steps";
import Testimonial from "../Components/HomeComps/Testimonial";
import Why from "../Components/HomeComps/Why";
import Footer from "../Components/Static/Footer";
import Header from "../Components/Static/Header";
// import Category from "../Components/HomeComps/Category";

const LandingPage = () => {
  return ( <div>
    
    <Hero/>
    <Category/>
    <Why/>
    <Steps/>
    <Testimonial/>
    <Faq/>
    
  </div> );
}
 
export default LandingPage;