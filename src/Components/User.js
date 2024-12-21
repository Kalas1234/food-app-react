import { useEffect } from "react";



const User = ({name, location}) => {


    useEffect(() => {
        const timer = setInterval(() => {
          console.log('useEffect is called');
        }, 1000);
    
        return () => {
          clearInterval(timer); // Clear the interval here using the stored interval ID
          console.log('Interval cleared');
        };
      }, []); // Dependency array ensures this effect runs only once
    return (
        <div className="user-card">
            <h2>name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>contact: kalashgangwal3030@gmail.com</h4>
        </div>
    );
};

export default User;
