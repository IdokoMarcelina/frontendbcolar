import Category from "../Components/Category";
import Faq from "../Components/Faq";
import Hero from "../Components/Hero";
import Steps from "../Components/Steps";
import Why from "../Components/Why";

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