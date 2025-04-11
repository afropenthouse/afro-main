import Link from "next/link";
import "./styles.scss";

const LocationList = async () => {
  const response = await fetch(`https://backend-vibeazy.fly.dev/admin/location`, {cache: 'no-store'});
  const locations = await response.json();
  console.log(locations.data.location);

  return (
    <div className="categories-container">
      <div className="categories-header">
        <h1>Locations</h1>
        <Link href="/locations/add-location" className="add-category-btn">
          Add New Location
        </Link>
      </div>

      <div className="categories-grid">
        {locations.data.location.length > 0 ? locations.data.location.map((location) => (
          <Link key={location.id} href={`/venues?location=${location.city}`} className="category-card">
            <div className="category-content">
              <h2>{location.city}</h2>
              <div className="venues-count">
                <span>{location.venues.length || 0}</span>
                <p>Venues</p>
              </div>
            </div>
          </Link>
        )) : <div className='text-center text-2xl font-bold'>No locations found</div>}
      </div>
    </div>
  );
};

export default LocationList;
