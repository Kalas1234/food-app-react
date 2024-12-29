import { useEffect, useState } from 'react';
import { MENU_API_URL } from '../utils/constants';

const useRestaurantMenu = (resId) => {
    const [resData, setResMenuData] = useState(null);

    const fetchData = async () => {
        const data = await fetch(`${MENU_API_URL}${resId}`);
        const json = await data.json();
        setResMenuData(json?.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return resData;
};

export default useRestaurantMenu;
