import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArtisanCard from '../../Components/ArtisanCard/ArtisanCard';
import './ProductPage.css';

const ProductPage = () => {
  const navigate = useNavigate();
  const [artisans, setArtisans] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // For better error handling

  useEffect(() => {
    // Fetch artisans from the backend
    const fetchArtisans = async () => {
      try {
        const response = await fetch("https://backend-bcolar.onrender.com/api/service/getallService");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Assuming the data is an array of services
        setArtisans(data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, []);

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
      selectedRegion === "All" || (artisan.region || "").toLowerCase() === selectedRegion.toLowerCase();
    const matchesSearch =
      (artisan.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (artisan.category || "").toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

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
            {/* Add Nigerian states */}
            {[
              "Abia",
              "Adamawa",
              "Akwa Ibom",
              "Anambra",
              "Bauchi",
              "Bayelsa",
              "Benue",
              "Borno",
              "Cross River",
              "Delta",
              "Ebonyi",
              "Edo",
              "Ekiti",
              "Enugu",
              "Gombe",
              "Imo",
              "Jigawa",
              "Kaduna",
              "Kano",
              "Katsina",
              "Kebbi",
              "Kogi",
              "Kwara",
              "Lagos",
              "Nasarawa",
              "Niger",
              "Ogun",
              "Ondo",
              "Osun",
              "Oyo",
              "Plateau",
              "Rivers",
              "Sokoto",
              "Taraba",
              "Yobe",
              "Zamfara",
              "Abuja",
            ].map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Artisan Display */}
        <div className="productDisplay">
          {loading ? (
            <p>Loading services...</p>
          ) : error ? (
            <p className="error">Error: {error}</p>
          ) : filteredArtisans.length > 0 ? (
            filteredArtisans.map((artisan, index) => (
              <ArtisanCard
                key={index}
                service={artisan.category || "N/A"}
                name={artisan.name || artisan.title || "No Name Provided"}
                region={artisan.region || "Unknown"}
                image={artisan.productPic || 'default-image-url.jpg'} // Fallback for missing images
              />
            ))
          ) : (
            <p>No services found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
