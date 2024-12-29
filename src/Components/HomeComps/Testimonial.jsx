import styled from "styled-components";
import TestimonialProps from "../../Reuseables/TestimonialProps";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img from "../../assets/profile/profile.avif"



 

const Testimonial = () => {
    const settings = {
        dots: true, // Show navigation dots
        // infinite: true, // Infinite looping
        speed: 4000, // Transition speed in ms
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enable auto-scrolling
        autoplaySpeed: 4000, // Auto-scrolling interval
        // fade: true,
        arrows: true,
        nextArrow: <button>Next</button>,
        prevArrow: <button>Prev</button>,
        centerMode: true
    
    
      };

    return ( <TestimonialDiv  >
        <h2>Testimonials</h2>
        <Slider {...settings}>
        <TestimonialProps image={Img} Name="Odunlade Adekola" Comment="“This platform completely transformed my business! I went from working on one-off projects to having a steady stream of clients who truly value my craft.”"/>
        <TestimonialProps image={Img} Name="Femi Adebayo" Comment="“As an independent potter, finding customers was always a struggle. Now, I’m showcasing my work to people who love artisanal products!”"/>
        <TestimonialProps image={Img} Name="Ibrahim Chatta" Comment="“I’ve always loved unique handmade goods, and this site makes it so easy to connect with talented artists. My custom painting is now the centerpiece of my living room!”"/>
        <TestimonialProps image={Img} Name="Muyiwa Ademola" Comment="“Finally, a website that truly celebrates artisans and craftsmanship. It’s a win-win for artists and people like me who want to support their work!”"/>
        <TestimonialProps image={Img} Name="Adeniyi Johnson" Comment="“The variety of talented artisans on this platform is incredible. It’s my go-to place for gifts and custom pieces that you can’t find anywhere else.”"/>

        </Slider>

    </TestimonialDiv> );
}
 
export default Testimonial;

const TestimonialDiv = styled.div`
    max-width: 1440px;
    margin: auto;
    border: 1px solid;
    height: 600px;
    /* display: flex; */
    /* justify-items: center; */
    padding: 30px ;
    /* background-color: hsl(90, 70%, 80%); */
    border-radius: 40px;

`
// const TestCard = styled.div`
//     margin: auto;
//     display: flex;
//    /* flex-wrap: wrap; */
//    justify-content: space-between;
//     gap: 30px;
// `