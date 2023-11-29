
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import './contact-us.css';

function ContactUs() {
    return (
        <div className='introContainer cnt' id='contacts'>
            <h1 className='title'>Contact us</h1>
            <div className='cnct-us'>
                <div className='disc-icon'>
                    <a href='https://discord.gg/ZKHzXNhh' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faDiscord} size="10x" style={{ color: "#7289da" }} />
                    </a>
                </div>
            </div>
            <h1 className='title footer'> © 2023 - still under development <a className='tenpenny' href='https://tenpenny.netlify.app/' target='_blank' rel='noopener noreferrer'>-Tenpenny-</a></h1>


        </div>
    );
}

export default ContactUs;