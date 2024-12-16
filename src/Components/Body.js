import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
    const [listOfRestauant, setListOfRestauant] = useState([]) //it will always keep the original list of restaurant
    const [filteredRes, setFilteredRes] = useState([]) //it will display the restaurant on the UI
    const [searchText, setSearchText] = useState('');

    console.log('body rendered')

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        let resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestauant(resData)
        setFilteredRes(resData);

    }
    useEffect(() => {
        console.log('useEffect called')
        fetchData()
    }, [])

    return (

        filteredRes.length === 0 ? <Shimmer /> : (<div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className = "search-btn"
                    onChange={e=>setSearchText(e.target.value)}
                       ></input>
                    <button
                    onClick={()=>{
                        const filterdList = listOfRestauant.filter(res =>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                        console.log(filterdList)
                       setFilteredRes(filterdList)
                    }}>Search</button>

                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredRes = listOfRestauant.filter(res => res?.info?.avgRatingString > 4.5)
                        console.log(filteredRes)
                        setFilteredRes(filteredRes)
                    }}
                >
                    Top Rated Restaurant
                </button>

            </div>
            <div className="res-container">
                {filteredRes.map((restaurant) => (
                   <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}><RestaurantCard  resData={restaurant} /></Link>
                ))}
            </div>
        </div>
        )
    );
};

export default Body;