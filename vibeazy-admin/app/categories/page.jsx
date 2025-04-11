import Link from "next/link";
import "./styles.scss";

const CategoryList = async () => {
  const response = await fetch(`https://backend-vibeazy.fly.dev/admin/category`, {cache: 'no-store'});
  const categories = await response.json();
  console.log(categories.data.category);
  return (
    <div className="categories-container">
      <div className="categories-header">
        <h1>Categories</h1>
        <Link href="/categories/add-category" className="add-category-btn">
          Add New Category
        </Link>
      </div>

      <div className="categories-grid">
        {categories.data.category.length > 0 ? categories.data.category.map((category) => (
          <Link key={category.id} href={`/venues?category=${category.category}`} className="category-card">
            <div className="category-content">
              <h2>{category.category}</h2>
              <div className="venues-count">
                <span>{category.venues.length || 0}</span>
                <p>Venues</p>
              </div>
            </div>
          </Link>
        )) : <div className='text-center text-2xl font-bold'>No categories found</div>}
      </div>
    </div>
  );
};

export default CategoryList;
