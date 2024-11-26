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
const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor:'#f0f0f0'}}>
            <img
            className='res-logo'
            src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi'
            />
            <h3>Meghna Foods</h3>
            <h4>Biryani,NorthIndian,Asian</h4>
            <h4>4 STARS</h4>
            <h4>38 minutes</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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
