import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null)
    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);
    if (resData === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resData?.cards[2]?.card?.card?.info;
    const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    console.log('check12', categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(',')} - {costForTwoMessage}</p>

            {categories.map((category,index) => (
                <RestaurantCategory 
                data={category?.card?.card}
                  showItems = {index === showIndex ? true : false} 
                  setShowIndex = {()=> {setShowIndex(index)}}
                  />
            ))}
        </div>
    );
};
export default RestaurantMenu;
