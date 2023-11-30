import React, { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import Logo from '../../assets/images/hull-main-page.png';
import Logo2 from '../../assets/images/logo-nav.png';
import './main-page.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HullCarousel from './constants/carousel';
import { BrowserRouter } from 'react-router-dom';
const sections = [
    { id: 'intro', name: 'INTRODUCTION' },
    { id: 'about', name: 'ABOUT US' },
    { id: 'location', name: 'LOCATION' },
    { id: 'contacts', name: 'CONTACT US' },
];

function StartNowModal(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='startNowModal'
        >

            <Modal.Body className='startNowModalBody'>
                <HullCarousel />
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                <a style={{ textDecoration: 'none', color: 'black' }} href='/underDev'> <button className='str-btn btn-mdl' onClick={props.onHide}>LogIn</button></a>
            </Modal.Footer>
        </Modal>
    );
}

function MainPage() {


    /* Start now Modal */
    const [modalShow, setModalShow] = React.useState(false);


    const [scrolling, setScrolling] = useState(false);
    const controls = useAnimation();

    const handleScroll = () => {
        if (window.scrollY > 0 && !scrolling) {
            setScrolling(true);
            controls.start({ opacity: 0, y: -50, transition: { delay: 0.2 } });
        } else if (window.scrollY === 0 && scrolling) {
            setScrolling(false);
            controls.start({ opacity: 1, y: 0, transition: { delay: 0.2 } });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls, scrolling]);

    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = sections.map((section) => (
        <a key={section.id} onClick={() => handleNavClick(section.id)}>
            {section.name}
        </a>
    ));

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
                <motion.div
                    className="hnavbar"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <img className="nav-logo" src={Logo2} alt="" />
                    <div className="hnav-Items">{navItems}</div>
                    <button onClick={() => setModalShow(true)} className="str-btn"> Start now</button>
                </motion.div>
            )}
            <StartNowModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
}

export default MainPage;
