import styled from "styled-components";
import WhyProps from "../../Reuseables/WhyProps";


const Why = () => {
    return ( <WhySection>
           <h2> Why Blue Collar?</h2>
        <WhyDiv>
         
            <WhyLeft>
                <h3>For Artisans</h3>
               
                    <WhyProps head="Focused on Blue Collar Workforce" content="We specialize in connecting skilled workers with quality opportunities"/>
                    <WhyProps head="Verified & Authentic Jobs" content="All job listings are carefully vetted to ensure legitimacy and fairness."/>
                    <WhyProps head="Get the Job in Your Locality" content="We prioritize local opportunities, so you can work closer to home."/>
                    <WhyProps head="No Need to Create a Resume" content="Simply sign up and start applying—no complicated resumes required."/>
                    <WhyProps head="Get Help from Our Local Representative" content="Our team is available to assist and guide you through the process."/>
                    <WhyProps head="No Hidden Charges" content="Transparent pricing with no surprise fees."/>
                
            </WhyLeft>

            <WhyRight>
                <h3>For Users</h3>
                
                    <WhyProps head="Access to Verified Workers" content="Hire skilled and vetted professionals who are ready to work."/>
                    <WhyProps head="Find Local Talent" content="Easily connect with workers in your area to get jobs done quickly and efficiently."/>
                    <WhyProps head="Efficient Hiring Process" content="Quickly find and hire workers without the hassle of lengthy applications."/>
                    <WhyProps head="Manage Jobs Seamlessly" content=" Post jobs, communicate with workers, and handle payments all in one place."/>
                    <WhyProps head="Reliable Support" content="Our local representatives are available to assist with any hiring needs or questions."/>
                    <WhyProps head="No Hidden Fees" content="Clear and upfront pricing for both workers and employers."/>
                
            </WhyRight>
        </WhyDiv>
    </WhySection>
    );
}
 
export default Why;

const WhySection = styled.div`
     padding: 30px;
    h2{
        text-align: center;
        font-size: 35px;
        color: #0000ff;
    }

`

const WhyDiv = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 1440px;
    margin: 40px auto;
    h3{
        font-size: 30px;
        color: #0000ff;
    }
    @media (max-width:830px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

`
const WhyLeft = styled.div`
   border: 3px solid #0000ff;
    max-width: 450px;
    padding: 5px 20px;
    background-color: #E1E7F3 ;
    border-radius: 50px 50px 0px 50px;
    @media (max-width:1000px) {
     width: 350px ;
    }
    @media (max-width:830px) {
     max-width: 500px ;
    }
`
const WhyRight = styled.div`
    border: 3px solid #0000ff;
    max-width: 450px;
    padding: 5px 20px;
    background-color: #E1E7F3 ;
    border-radius: 50px 50px 0px 50px;
    @media (max-width:1000px) {
     width: 350px ;
    }
    @media (max-width:830px) {
     max-width: 550px ;
    }

`

