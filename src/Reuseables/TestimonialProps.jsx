import styled from "styled-components";

const TestimonialProps = (props) => {
    return ( <TestimonialPropsDiv>

    <div className="empty"></div>


    <div className="imgDiv">
    <img src={props.image} alt="" />
    
    <h4>{props.Name}</h4>
    <hr />
    <p>{props.Comment}</p>    
    </div>
    </TestimonialPropsDiv> );
}
 
export default TestimonialProps;

const TestimonialPropsDiv = styled.div`
    height: 370px;
    width: 320px;
    text-align: center;
    border-radius: 30px;
    box-shadow: 1px 1px 1px 2px gray;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    background-color: white;
    margin: 20px;
    /* border: 1px solid; */
    
    hr{
        border: 1.5px solid #0000ff;
        width: 130px;
        
    }
    p, h4{
        margin: 0 auto;
        font-size: 16px;
        max-width: 300px;
    }
    h4{
        font-size: 20px;
        font-style:oblique ;
    }
.empty{
    height: 120px;
    border-radius: 30px;
    background-image: linear-gradient(45deg, #E1E7F3 0%, #0000ff 33%, #3a47d5 66%, #214da5 100%);
    /* background: linear-gradient(90deg, #E1E7F3 0%, #0000ff 100%); */
    }
.imgDiv{
    position: relative;
    bottom: 80px;

    img{
    width: 150px;
    height: 150px;
    border-radius: 75px;
    border: 4px solid white;
    margin: auto;
            
    }
        
}
`