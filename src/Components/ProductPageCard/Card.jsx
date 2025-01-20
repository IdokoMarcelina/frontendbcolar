
import './Card.css';
import {Link} from 'react-router-dom'

const ArtisanCard = ({ service, name, image, region}) => {
    return (
        <article className="cardContainer">
            <section className="imageSection">
                <img src={image} alt={`${service} service`} />
            </section>
            <h2 className="serviceTitle">{service}</h2>
            <p className="artisanName">{name}</p>
            <p className="artisanName">Region: {region}</p>
            <div className="buttonDiv">
               <Link to='/artisancard'>
                 <button className="profileButton">View Profile</button>
               </Link>
               <Link to='/book'>
                <button className="bookService">Book Service</button>
               </Link>
            </div>
        </article>
    );
};

export default ArtisanCard;