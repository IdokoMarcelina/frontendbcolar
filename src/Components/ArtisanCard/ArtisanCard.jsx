
import './ArtisanCard.css';

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
                <button className="profileButton">View Profile</button>
                <button className="bookService">Book Service</button>
            </div>
        </article>
    );
};

export default ArtisanCard;
