import styled from "styled-components";
import TestimonialProps from "../../Reuseables/TestimonialProps";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img from "../../assets/profile/profile.avif" 

const Testimonial = () => {
    const settings = {
        dots: true, 
        speed: 4000, 
        slidesToShow: 3, 
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 4000,  
        centerMode: true,
        arrows: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    
      };

    return ( <TestimonialDiv  >
        <h2>Testimonials</h2>
        <Slider {...settings}>
        <TestimonialProps image={Img} Name="Faith" Comment="“This platform completely transformed my business! I went from working on one-off projects to having a steady stream of clients who truly value my craft.”"/>
        <TestimonialProps image={Img} Name="Ashley" Comment="“As an independent potter, finding customers was always a struggle. Now, I’m showcasing my work to people who love artisanal products!”"/>
        <TestimonialProps image={Img} Name="Ola" Comment="“I’ve always loved unique handmade goods, and this site makes it so easy to connect with talented artists. My custom painting is now the centerpiece of my living room!”"/>
        <TestimonialProps image={Img} Name="Aisha" Comment="“Finally, a website that truly celebrates artisans and craftsmanship. It’s a win-win for artists and people like me who want to support their work!”"/>
        <TestimonialProps image={Img} Name="Johnson" Comment="“The variety of talented artisans on this platform is incredible. It’s my go-to place for gifts and custom pieces that you can’t find anywhere else.”"/>

        </Slider>

    </TestimonialDiv> );
}
 
export default Testimonial;

const TestimonialDiv = styled.div`
    max-width: 100%;
    margin: 30px auto;
    height: 600px;
    padding: 30px ;
    border-radius: 40px;
    h2{
  font-size: 35px;
  width: fit-content;
  color: #0000ff;
  margin: auto;
  margin-bottom: 50px;

  @media (max-width:720px) {
    font-size: 28px;
    text-align: center;
  }
  @media (max-width:420px) {
    font-size: 22px;
    }
  }
  @media (max-width:820px) {
    width: 80%;
  }

`
