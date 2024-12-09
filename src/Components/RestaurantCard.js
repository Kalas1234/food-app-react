import React from 'react'
import { CDN_URL } from '../utils/constants';
const RestaurantCard = ({ resData }) => {
    const {cloudinaryImageId,avgRatingString,costForTwo,name,cuisines} = resData?.info
    const {deliveryTime} = resData?.info?.sla
     return (
         <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
             <img
                 className="res-logo"
                 src={`${CDN_URL}/${cloudinaryImageId}`}
             />
             <h3>{name}</h3>
             <h4 className='overflow-handle'>{cuisines.join(',')}</h4>
             <h4>{avgRatingString} Star</h4>
             <h4>{deliveryTime} Minutes</h4>
             <h4>{costForTwo}</h4>
         </div>
     );
 };

 export default RestaurantCard;
