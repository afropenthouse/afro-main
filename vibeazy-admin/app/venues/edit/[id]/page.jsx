import EditVenue from "./EditVenue";

export default async function page({ params }) {
  const venueId = params.id;
  const response1 = await fetch(
    `https://backend-vibeazy.fly.dev/admin/location`,
    { cache: "no-store" }
  );
  const data1 = await response1.json();
//   console.log(data1.data.location);

  const response = await fetch(
    `https://backend-vibeazy.fly.dev/admin/category`,
    { cache: "no-store" }
  );
  const data = await response.json();



  const response3 = await fetch(
    `https://backend-vibeazy.fly.dev/admin/venue/${venueId}`,
    { cache: "no-store" }
  );
  const data3 = await response3.json();

console.log(data3)

  const categories = data.data.category.map((category) => ({
    id: category.id,
    name: category.category, // Map "category" to "name"
  }));

  const locations = data1.data.location.map((location) => ({
    id: location.id,
    name: location.city, // Map "category" to "name"
  }));

  return (
    <EditVenue
      categories={categories}
      locations={locations}
      venueData={data3.data}
    />
  );
}
