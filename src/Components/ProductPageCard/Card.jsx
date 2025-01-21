
import './Card.css';
import {Link} from 'react-router-dom'

const ArtisanCard = ({artisan}) => {
    return (
        <article className="cardContainer">
            <section className="imageSection">
                <img src={artisan.productPic} alt={`${artisan.category} service`} />
            </section>
            <h2 className="serviceTitle">{artisan.category}</h2>
            <p className="artisanName">{artisan.name}</p>
            <p className="artisanName">Region: {artisan.region}</p>
            <div className="buttonDiv">
            <Link to={`/artisancard/${artisan.userId}`}>
                    <button className="profileButton">View Profile</button>
                </Link>
                <Link to="/chat">
                    <button className="bookService">Message</button>
                </Link>
                {/* <Link to={`/book/${artisan.userId}`}>
                    <button className="bookService">Book Service</button>
                </Link> */}
            </div>
        </article>
    );
};

export default ArtisanCard;