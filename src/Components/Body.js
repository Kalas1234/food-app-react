import React, { useState, useEffect, useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';
import { withPromotedLabel } from './RestaurantCard';
import UserContext from '../utils/UserContext';

const Body = () => {
    const [listOfRestauant, setListOfRestauant] = useState([]); //it will always keep the original list of restaurant
    const [filteredRes, setFilteredRes] = useState([]); //it will display the restaurant on the UI
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();

    const { setUserName } = useContext(UserContext);

    console.log('body rendered');
    const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);
    console.log('check3', RestaurantPromotedCard);

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await data.json();
        let resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestauant(resData);
        setFilteredRes(resData);
    };
    useEffect(() => {
        console.log('useEffect called');
        fetchData();
        console.log('check2', filteredRes);
    }, []);
    if (onlineStatus === false) {
        return <h1>please check your Internet connection!</h1>;
    }

    return filteredRes.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className=" filter flex">
                <div className="m-4 p-4">
                    <input
                        type="text"
                        className="border-2 border-solid border-black"
                        onChange={(e) => setSearchText(e.target.value)}></input>
                    <button
                        className="px-4 py-2 bg-green-100 m-4 border border-black rounded-md"
                        onClick={() => {
                            const filterdList = listOfRestauant.filter((res) =>
                                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            console.log(filterdList);
                            setFilteredRes(filterdList);
                        }}>
                        Search
                    </button>
                </div>
                <div className="p-4 m-4 flex items-center">
                    <button
                        className="px-4 py-2 rounded-lg bg-gray-100"
                        onClick={() => {
                            const filteredRes = listOfRestauant.filter((res) => res?.info?.avgRatingString > 4.5);
                            console.log('check1', filteredRes);
                            setFilteredRes(filteredRes);
                        }}>
                        Top Rated Restaurant
                    </button>
                    <input
                        type="text"
                        className="border-2 border-solid border-black mx-8 p-2"
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}></input>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRes.map((restaurant) => (
                    <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                        {restaurant?.info?.isOpen ? (
                            <RestaurantPromotedCard resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
