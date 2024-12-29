import { useEffect, useState } from 'react';
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        //Effect Runs Once: The useEffect runs only once after the initial render, setting up the event listeners.
//Event Listeners Remain Active: The event listeners remain active and listen for changes in the online/offline status. They call setOnlineStatus when the events are triggered.
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        });
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;
