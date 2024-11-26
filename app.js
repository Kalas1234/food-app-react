import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';

const heading = React.createElement('h1', { id: 'heading' }, 'Kalash React code');
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
const Header = () => {
    return (
        <div className="header">
            <div className="log-container">
                <img
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
                    className="logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};
const RestaurantCard = ({ resData }) => {
    return (
        <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
            <img
                className="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(',')}</h4>
            <h4>{resData?.info?.avgRatingString}</h4>
            <h4>{resData?.info?.sla?.deliveryTime}</h4>
        </div>
    );
};

const resObj = {
    info: {
        id: '10575',
        name: 'Pizza Hut',
        cloudinaryImageId: 'RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg',
        locality: 'Richmond Town',
        areaName: 'Shanti Nagar',
        costForTwo: '₹600 for two',
        cuisines: ['Pizzas'],
        avgRating: 4.3,
        parentId: '721',
        avgRatingString: '4.3',
        totalRatingsString: '10K+',
        sla: {
            deliveryTime: 29,
            lastMileTravel: 2.6,
            serviceability: 'SERVICEABLE',
            slaString: '25-30 mins',
            lastMileTravelString: '2.6 km',
            iconType: 'ICON_TYPE_EMPTY'
        },
        availability: {
            nextCloseTime: '2024-11-27 01:00:00',
            opened: true
        },
        badges: {},
        isOpen: true,
        type: 'F',
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: '50% OFF',
            subHeader: 'UPTO ₹100'
        },
        differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
        restaurantOfferPresentationInfo: {},
        externalRatings: {
            aggregatedRating: {
                rating: '4.1',
                ratingCount: '1.7K+'
            },
            source: 'GOOGLE',
            sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag'
        },
        ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
        context: 'seo-data-81078c17-8f56-45bc-805c-6f3d34f20d57'
    },
    cta: {
        link: 'https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-shanti-nagar-rest10575',
        type: 'WEBLINK'
    }
};
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData={resObj} />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Body />
        </div>
    );
};

root.render(<AppLayout />);
