import React from 'react'
import { CDN_URL } from '../utils/constants';
const RestaurantCard = ({ resData }) => {
    const {cloudinaryImageId,avgRatingString,costForTwo,name,cuisines} = resData?.info
    const {deliveryTime} = resData?.info?.sla
     return (
         <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-400">
             <img
                 className="res-logo rounded-lg w-[100%] h-[35%]"
                 src={`${CDN_URL}/${cloudinaryImageId}`}
             />
             <h3 className='font-bold text-lg py-4'>{name}</h3>
             <h4 className='overflow-scroll'>{cuisines.join(',')}</h4>
             <h4>{avgRatingString} Star</h4>
             <h4>{deliveryTime} Minutes</h4>
             <h4>{costForTwo}</h4>
         </div>
     );
 };

 export default RestaurantCard;
