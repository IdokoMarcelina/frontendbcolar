import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArtisanCard from '../../Components/ArtisanCard/ArtisanCard';
import './ProductPage.css';
import image from '../../assets/images/capenter.jpg';

const ProductPage = () => {
  const navigate = useNavigate();

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
    { service: "Dry Cleaning / Laundry", name: "Paul Okoye", region: "Abuja", image },
    { service: "HairStyling", name: "Joke Badmus", region: "Kano", image },
    { service: "Painting", name: "Princewill Ekong", region: "Lagos", image },
    { service: "House Keeping", name: "Umar Shefiu", region: "Abuja", image },
    { service: "Electrical Jobs", name: "Ridwan Kazeem", region: "Lagos", image },
    { service: "AC / Refrigeration", name: "Victor Nnamdi", region: "Kano", image },
    { service: "Gardening", name: "Oladare Babalola", region: "Abuja", image },
  ];

  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddService = () => {
    navigate('/addService'); // Route to /addService
  };

  const filteredArtisans = artisans.filter((artisan) => {
    const matchesRegion =
      selectedRegion === "All" || artisan.region === selectedRegion;
    const matchesSearch =
      artisan.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const sponsoredAds = filteredArtisans.slice(0, 8);
  const regularArtisans = filteredArtisans.slice(8);

  return (
    <div className="ProductContainer">
      <div className="ProductWrapper">
        <h1 className="mainTitle">Find Your Service</h1>
        <div className="productNavbar">
          <div className="addServiceFlex">
            <button className="addService" onClick={handleAddService}>
              <h1>+</h1>
            </button>
            <h3>Add Service</h3>
          </div>
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="What service do you need today?"
              className="searchInput"
              value={searchTerm}
              onChange={handleSearchChange}
            />
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
