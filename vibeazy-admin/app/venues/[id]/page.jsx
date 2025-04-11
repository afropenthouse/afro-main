// "use client"
// import React from 'react';
// import Link from 'next/link';
// import './styles.scss';

// const VenueDetail = () => {
//     // Sample data - replace with your API call
//     const venue = {
//         id: "9741a5a1-efa7-4af1-bc3f-b56580d73acf",
//         categoryId: "9e713513-3fb8-4fb4-9814-b0a04ea4aebf",
//         venueName: "Ocean View Bar",
//         startAmount: 20000,
//         endAmount: 25000,
//         accountNumber: "1234567890",
//         bankName: "Ocean Bank",
//         rating: 4.5,
//         callLine: "08123456789",
//         discount: 10,
//         longitude: "3.3784",
//         latitude: "6.5244",
//         location: {
//             id: "fb51eb13-1b58-460a-a0fc-0d88f8abddb8",
//             city: "yaba"
//         },
//         category: {
//             id: "9e713513-3fb8-4fb4-9814-b0a04ea4aebf",
//             category: "Resturansts And Bars"
//         },
//         promoCode: [
//             {
//                 id: "5d6f62b9-41d7-4601-8624-81fd4ab11b6c",
//                 discountPercent: 50,
//                 code: "HALFOFF",
//                 isActive: true,
//                 useTimes: 0,
//                 createdAt: "2024-09-12T11:25:50.295Z"
//             }
//         ]
//     };

//     const hasActivePromos = venue.promoCode.some(promo => promo.isActive);

//     const renderStars = (rating) => {
//         const stars = [];
//         for (let i = 1; i <= 5; i++) {
//             stars.push(
//                 <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
//                     ★
//                 </span>
//             );
//         }
//         return stars;
//     };

//     return (
//         <div className="venue-detail-container">
//             <div className="venue-header">
//                 <div className="venue-title-section">
//                     <h1>{venue.venueName}</h1>
//                     <div className="venue-meta">
//                         <span className="venue-category">{venue.category.category}</span>
//                         <div className="venue-rating">
//                             <div className="rating">
//                                 {renderStars(venue.rating)}
//                             </div>
//                             <span className="rating-value">{venue.rating}</span>
//                         </div>
//                         <span className="venue-location">
//                             {venue.location.city}
//                         </span>
//                         <span className="venue-price">
//                             ₦{venue.startAmount.toLocaleString()} - ₦{venue.endAmount.toLocaleString()}
//                         </span>
//                         <span className="venue-contact">
//                             {venue.callLine}
//                         </span>
//                     </div>
//                 </div>
//                 <div className="venue-actions">
//                     <Link href={`/venues/1/add-discount`} className="action-button primary">
//                         Add Discount
//                     </Link>
//                     <button className="action-button secondary">
//                         More Options
//                     </button>
//                 </div>
//             </div>

//             {hasActivePromos && (
//                 <div className="active-promo-banner">
//                     🎉 Discount Available at {venue.venueName}
//                 </div>
//             )}

//             <div className="venue-content">
//             <div className="venue-promos">
//                     <h2>Active Discounts</h2>
//                     <div className="promo-grid">
//                         {venue.promoCode.map(promo => (
//                             <div key={promo.id} className={`promo-card ${promo.isActive ? 'active' : 'inactive'}`}>
//                                 <div className="promo-header">
//                                     <span className="promo-code">{promo.code}</span>
//                                     <span className={`promo-status ${promo.isActive ? 'active' : 'inactive'}`}>
//                                         {promo.isActive ? 'Active' : 'Inactive'}
//                                     </span>
//                                 </div>
//                                 <div className="promo-details">
//                                     <div className="discount-percent">{promo.discountPercent}% OFF</div>
//                                     <div className="venue-name">at {venue.venueName}</div>
//                                     <div className="promo-stats">
//                                         <span>Used: {promo.useTimes} times</span>
//                                         <span>Created: 9/12/2024</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="info-card">
//                     <h2>Banking Details</h2>
//                     <div className="info-grid">
//                         <div className="info-item">
//                             <label>Bank Name</label>
//                             <span>{venue.bankName}</span>
//                         </div>
//                         <div className="info-item">
//                             <label>Account Number</label>
//                             <span>{venue.accountNumber}</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="info-card">
//                     <h2>Location Details</h2>
//                     <div className="info-grid">
//                         <div className="info-item">
//                             <label>Longitude</label>
//                             <span>{venue.longitude}</span>
//                         </div>
//                         <div className="info-item">
//                             <label>Latitude</label>
//                             <span>{venue.latitude}</span>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default VenueDetail;
import EachVenue from "./EachVenue";

async function page({ params }) {
  const id = params.id;
  const response1 = await fetch(`https://backend-vibeazy.fly.dev/admin/venue/${id}`, {
    cache: "no-store",
  });
  const data1 = await response1.json();
  console.log(data1);

  return (
    <div>
      <EachVenue venue={data1?.data} />
    </div>
  );
}

export default page;
