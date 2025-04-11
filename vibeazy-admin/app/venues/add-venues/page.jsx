
import AddVenue from './AddVenue'
export default async function page() {
  const response1 = await fetch(`https://backend-vibeazy.fly.dev/admin/location`, {cache: 'no-store'});
  const data1 = await response1.json();
  console.log(data1.data.location);

  const response = await fetch(`https://backend-vibeazy.fly.dev/admin/category`, {cache: 'no-store'});
  const data = await response.json();

  const categories = data.data.category.map(category => ({
    id: category.id,
    name: category.category, // Map "category" to "name"
  }));

  const locations = data1.data.location.map(location => ({
    id: location.id,
    name: location.city, // Map "category" to "name"
  }));

  console.log('locations', locations);

  console.log('categories', categories);
  return (
    <AddVenue categories={categories} locations={locations} />
  )
}
