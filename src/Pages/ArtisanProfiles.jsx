import { useState } from "react";

const ArtisanProfiles = () => {
  const [artisans] = useState([
    {
      id: 1,
      name: "John Doe",
      specialty: "Hair Stylist",
      contact: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      specialty: "Plumber",
      contact: "jane.smith@example.com",
    },
  ]);

  return (
    <div>
      <h2>Saved Artisan Profiles</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {artisans.map((artisan) => (
          <div
            key={artisan.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{artisan.name}</h3>
            <p>Specialty: {artisan.specialty}</p>
            <p>Contact: {artisan.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtisanProfiles;
