import React, { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import Logo from "../../assets/images/hull-main-page.png";
import Logo2 from "../../assets/images/logo-nav.png";
import { motion } from "framer-motion";
import './main-page.css';

const elements = [
    { id: 1, name: "INTODUCTION" },
    { id: 2, name: " ABOUT US" },
    { id: 3, name: "LOCATION" },
    { id: 4, name: "CONTACT US" },
];

function MainPage() {
    const navItems = elements.map(item => (
        <a key={item.id}>
            {item.name}
        </a>
    ));

    const [scrolling, setScrolling] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && !scrolling) {
                setScrolling(true);
                controls.start({ opacity: 0, y: -50, transition: { delay: 0.2 } });
            } else if (window.scrollY === 0 && scrolling) {
                setScrolling(false);
                controls.start({ opacity: 1, y: 0, transition: { delay: 0.2 } });
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls, scrolling]);

    return (
        <div>
            <motion.div
                className="myContainer"
                initial={{ opacity: 1, y: 0 }}
                animate={controls}
                transition={{ duration: 0.3 }}
            >
                <img className="mainLogo" src={scrolling ? Logo2 : Logo} alt="" />
            </motion.div>
            {scrolling && (
                <motion.div className="navbar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <img className="nav-logo" src={Logo2} alt="" />
                    <div className="nav-Items">
                        {navItems}
                    </div>

                    <button className="str-btn"> Start now</button>
                </motion.div>
            )}
        </div>
    );
}

export default MainPage;
