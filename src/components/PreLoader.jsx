import { useEffect, useState } from 'react';
import './PreLoader.css'; // Import the CSS file

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust time as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`preloader ${!loading ? 'fade-out' : ''}`}>
            <h1>Everything is a LIE</h1>
            <div className="loading-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default Preloader;
