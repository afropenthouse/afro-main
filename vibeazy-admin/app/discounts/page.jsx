"use client"
import React from 'react';
import Link from 'next/link';
import './styles.scss';

const VenueDetail = () => {
    // Sample data - replace with your API call
    const venue = {
        id: "9741a5a1-efa7-4af1-bc3f-b56580d73acf",
        categoryId: "9e713513-3fb8-4fb4-9814-b0a04ea4aebf",
        venueName: "Ocean View Bar",
        startAmount: 20000,
        endAmount: 25000,
        accountNumber: "1234567890",
        bankName: "Ocean Bank",
        rating: 4.5,
        callLine: "08123456789",
        discount: 10,
        longitude: "3.3784",
        latitude: "6.5244",
        location: {
            id: "fb51eb13-1b58-460a-a0fc-0d88f8abddb8",
            city: "yaba"
        },
        category: {
            id: "9e713513-3fb8-4fb4-9814-b0a04ea4aebf",
            category: "Resturansts And Bars"
        },
        promoCode: [
            {
                id: "5731230f-4173-4ee0-a068-1fea1fd05ab2",
                discountPercent: 20,
                code: "SAVE20",
                isActive: true,
                useTimes: 0,
                createdAt: "2024-09-12T11:21:16.166Z"
            },
            {
                id: "5d6f62b9-41d7-4601-8624-81fd4ab11b6c",
                discountPercent: 50,
                code: "HALFOFF",
                isActive: true,
                useTimes: 0,
                createdAt: "2024-09-12T11:25:50.295Z"
            }
        ]
    };

    const hasActivePromos = venue.promoCode.some(promo => promo.isActive);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={`star ${i <= rating ? 'filled' : 'empty'}`}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="venue-detail-container">
            {/* <div className="venue-header">
                <div className="venue-title-section">
                    <h1>{venue.venueName}</h1>
                    <div className="venue-meta">
                        <span className="venue-category">{venue.category.category}</span>
                        <div className="venue-rating">
                            {renderStars(venue.rating)}
                            <span className="rating-value">{venue.rating}</span>
                        </div>
                        <span className="venue-location">{venue.location.city}</span>
                    </div>
                </div>
                <div className="venue-actions">
                    <Link href={`/venues/${venue.id}/add-promo`} className="action-button primary">
                        Add Promo
                    </Link>
                    <button className="action-button secondary">
                        More Options
                    </button>
                </div>
            </div> */}

           
                <div className="active-promo-banner">
                    🎉 Active Discounts Available at Vibeazy
                </div>
     

            <div className="venue-content">
                <div className="venue-promos">
                    <h2>Discounts</h2>
                    <div className="promo-grid">
                        {venue.promoCode.map(promo => (
                            <div key={promo.id} className={`promo-card ${promo.isActive ? 'active' : 'inactive'}`}>
                                <div className="promo-header">
                                    <span className="promo-code">{promo.code}</span>
                                    <span className={`promo-status ${promo.isActive ? 'active' : 'inactive'}`}>
                                        {promo.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                                <div className="promo-details">
                                    <div className="discount-percent">{promo.discountPercent}% OFF</div>
                                    <div className="venue-name">at {venue.venueName}</div>
                                    <div className="promo-stats">
                                        <span>Used: {promo.useTimes} times</span>
                                        <span>Created: 9/12/2024</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenueDetail;