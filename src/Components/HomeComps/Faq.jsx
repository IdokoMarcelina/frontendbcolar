import styled from "styled-components";

import FaqProps from "../../Reuseables/Faqprops";

const Faq = () => {

    
    return ( <FaqDiv>
    <h2> Frequently Asked Questions</h2>

        <FaqProps head="Why should I use Blue Collar?" content="The app connects you to skilled artisans quickly and easily for all your service needs. " id="first" id2="ff"/>
        <FaqProps head="What types of services are available on Blue Collar?" content=" You can find a wide range of skilled professionals, including plumbers, electricians, carpenters, and more. " id= "second" id2="ss"/>
        <FaqProps head="How can I earn money on Blue Collar?" content="Artisans can sign up, list their skills, and get hired for jobs posted by users." id="third" id2="tt"/>
        <FaqProps head="Are there any charges for applying for a job?" content="No, applying for jobs through Blue Collar is completely free. " id="fourth" id2="fr"/>
        <FaqProps head="Which locations does Blue Collar serve?" content="Currently, Blue Collar is available only in Lagos, but we’re working to expand to more cities soon." id2="ft"/>
        <FaqProps head=" Can I post a job for free?" content="Yes, users can post service requests on Blue Collar without any charges." id2="st"/>

    </FaqDiv>);
}
 
export default Faq;
const FaqDiv = styled.div`
    margin: 70px auto;
    width: 700px;
    h2{
    font-size: 35px;
    width: fit-content;
    color: #0000ff;
    margin: auto;
    margin-bottom: 50px;
  }
  @media (max-width:820px) {
    width: 80%;
  }
`