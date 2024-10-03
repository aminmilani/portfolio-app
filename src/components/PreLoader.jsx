import { useEffect, useState } from 'react';
import './Preloader.css'; // Import the CSS file

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust the time as needed

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return (
        loading ? (
            <div className="preloader">
                <h1>Loading...</h1>
            </div>
        ) : (
            <div className="content">
                {/* Your main content goes here */}
                <h2>Main Content</h2>
            </div>
        )
    );
};

export default Preloader;
