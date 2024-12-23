import { useState } from 'react';
import ArtisanCard from '../../Components/ArtisanCard/ArtisanCard';
import './ProductPage.css';
import image from '../../assets/images/capenter.jpg';

const ProductPage = () => {
    const artisans = [
        { service: "Plumbering", name: "Wasiu Tolani", region: "Lagos", image },
        { service: "Dry Cleaning / Laundry", name: "Paul Okoye", region: "Abuja", image },
        { service: "HairStyling", name: "Joke Badmus", region: "Kano", image },
        { service: "Painting", name: "Princewill Ekong", region: "Lagos", image },
        { service: "House Keeping", name: "Umar Shefiu", region: "Abuja", image },
        { service: "Electrical Jobs", name: "Ridwan Kazeem", region: "Lagos", image },
        { service: "AC / Refrigeration", name: "Victor Nnamdi", region: "Kano", image },
        { service: "Gardening", name: "Oladare Babalola", region: "Abuja", image },
        { service: "Plumbering", name: "Wasiu Tolani", region: "Lagos", image },
        { service: "Dry Cleaning / Laundry", name: "Paul Okoye", region: "Kano", image },
        { service: "HairStyling", name: "Joke Badmus", region: "Abuja", image },
        { service: "Painting", name: "Princewill Ekong", region: "Kano", image },
        { service: "House Keeping", name: "Umar Shefiu", region: "Lagos", image },
        { service: "Electrical Jobs", name: "Ridwan Kazeem", region: "Abuja", image },
        { service: "AC / Refrigeration", name: "Victor Nnamdi", region: "Kano", image },
        { service: "Gardening", name: "Oladare Babalola", region: "Lagos", image },
    ];

    const [selectedRegion, setSelectedRegion] = useState("All");

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    };

    const filteredArtisans =
        selectedRegion === "All"
            ? artisans
            : artisans.filter((artisan) => artisan.region === selectedRegion);

    const sponsoredAds = filteredArtisans.slice(0, 8);
    const regularArtisans = filteredArtisans.slice(8);

    return (
        <div className="ProductContainer">
            <div className="ProductWrapper">
                <h1 className="mainTitle">Find Your Service</h1>
                <div className="productNavbar">
                    <div className="addService">
                        <h1>+</h1>
                    </div>
                    <form className="searchForm">
                        <input
                            type="text"
                            placeholder="What service do you need today?"
                            className="searchInput"
                        />
                        <button type="submit" className="searchButton">
                            Search
                        </button>
                    </form>
                </div>

                {/* Filter by Region */}
                <div className="filterByRegion">
                    <label htmlFor="regionSelect">Filter by Region: </label>
                    <select
                        id="regionSelect"
                        value={selectedRegion}
                        onChange={handleRegionChange}
                        className="regionSelect"
                    >
                        <option value="All">All</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                        <option value="Kano">Kano</option>
                    </select>
                </div>

                <div className="productDisplay">
                    {/* Sponsored Ads Section */}
                    <div className="sponsoredSection">
                        <h3 className="sponsoredHeader">Sponsored Ads</h3>
                        <div className="sponsoredCards">
                            {sponsoredAds.map((artisan, index) => (
                                <ArtisanCard
                                    key={index}
                                    service={artisan.service}
                                    name={artisan.name}
                                    image={artisan.image}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Separator */}
                    <hr className="separator" />

                    {/* Regular Artisans Section */}
                    <div className="regularSection">
                        {regularArtisans.map((artisan, index) => (
                            <ArtisanCard
                                key={index + sponsoredAds.length}
                                service={artisan.service}
                                name={artisan.name}
                                image={artisan.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
