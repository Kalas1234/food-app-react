import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
const RestaurantMenu = () => {
    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);
    if (resData === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resData?.cards[2]?.card?.card?.info;
    const { itemCards } = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>
                {cuisines.join(',')} - {costForTwoMessage}
            </h2>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((res, index) => (
                    <li key={index}>
                        {res.card?.info?.name} - {res.card?.info?.price / 100 || res.card?.info?.defaultPrice / 100} Rs
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;
