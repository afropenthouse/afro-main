import Link from "next/link";
import "./styles.scss";
import Image from "next/image";

const CategoryList = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}/discounts/all`, {cache: 'no-store'});
  const discounts = await response.json();
  console.log(`discounts: ${JSON.stringify(discounts.data.discounts, null, 2)}`);

  return (
    <>
      <div className="categories-container">
      <div className="categories-header">
        <h1>Locations</h1>
        <Link href="/new-discounts/add" className="add-category-btn">
          Add New Discount
        </Link>
      </div>
      <div className="discounts-grid">
        {discounts?.data?.discounts?.length > 0 ? discounts?.data?.discounts?.map((discount) => (
          <Link 
            href={discount.url} 
            key={discount.id} 
            className="discount-card"
          >
            <div className="discount-image">
              <Image src={discount.image} alt={discount.title} width={200} height={200} />
            </div>
            <h3 className="discount-title">{discount.title}</h3>
          </Link>
        )) : <div className='text-center text-2xl font-bold'>No discounts found</div>}
      </div>
      </div>
    </>
  );
};

export default CategoryList;
