import React from "react";
import Sean from "../../assets/chars/Sean.png";
import Chelsea from "../../assets/chars/chelsea.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./about-us.css";

function About() {
    const [ref, inView] = useInView();
    const [cRef, cInView] = useInView();

    return (
        <div className="aboutCont" id="about">
            <h1 className="assos">Assossiation led by The hulldor Family and Sean Gvardia</h1>
            <div className="threeElems">
                <motion.div
                    className="sean"
                    ref={ref}
                    animate={{ x: inView ? 50 : -200 }}
                    transition={{ duration: 1 }}
                >
                    <img src={Sean} alt="Sean" />
                </motion.div>
                <div className="Pholder">
                    <p>The creation of this league marks a significant collaboration between the Hulldoor family
                        and Sean Gvardia, reflecting a shared vision to enhance the visibility and prominence
                        of the boxing scene in San Andreas. </p>
                </div>

                <motion.div
                    className="sean"
                    ref={cRef}
                    animate={{ x: cInView ? -90 : 50 }}
                    transition={{ duration: 1 }}>
                    <img src={Chelsea} alt="Chelsea"
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default About;
