import { useState, useEffect } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <h1>My Portfolio</h1>
            <nav>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    &#9776; {/* Hamburger icon */}
                </div>
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
