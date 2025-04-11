import VenueCards from "@/components/venues/Venue";
import Link from "next/link";


export default async function page() {
  const res = await fetch(`https://backend-vibeazy.fly.dev/admin/venue`, {cache: 'no-store'});
  const dat = await res.json();


  const response1 = await fetch(`https://backend-vibeazy.fly.dev/admin/location`, {cache: 'no-store'});
  const loc = await response1.json();


  const response = await fetch(`https://backend-vibeazy.fly.dev/admin/category`, {cache: 'no-store'});
  const cat = await response.json();

  const categories = cat.data.category.map(category => ({
    id: category.id,
    name: category.category, 
  }));

  const locations = loc.data.location.map(location => ({
    id: location.id,
    name: location.city,
  }));
  
  // console.log(categories)
  // console.log(locations)
  console.log(JSON.stringify(dat, null, 2))

 
 
  return (
    <div>
      <Link href="/venues/add-venues" className="flex justify-center align-middle items-center add-category-btn">
          Add New Venue
        </Link>
      <VenueCards venues={dat.data.venues} categories={categories} locations={locations} />
    </div>
  );
}
