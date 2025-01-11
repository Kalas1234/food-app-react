import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
    // const [showItems, setShowItems] = useState(false);
    const [showAccordian ,setShowAccordian] = useState(false)
    const handleClick = () => {
        // setShowItems(!showItems);
        setShowIndex();
        setShowAccordian(!showAccordian)
    };
    return (
        <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title}</span>
                <span>⬇️</span>
            </div>
            {showItems && showAccordian && <ItemList items={data.itemCards} />}
        </div>
    );
};

export default RestaurantCategory;
