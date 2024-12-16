import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resData, setResMenuData] = useState(null);
    const fetchData = async () => {
        const data = await fetch(`${MENU_API_URL}${resId}`);
        const json = await data.json();
        console.log('check11', json)
        setResMenuData(json?.data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (resData === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resData?.cards[2]?.card?.card?.info
    const { itemCards } = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    console.log('check12', itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")} - {costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((res, index) => (
                    <li key={index}>{res.card?.info?.name} - {res.card?.info?.price / 100 || res.card?.info?.defaultPrice / 100} Rs</li>
                ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu;