import underDev from "../assets/errors/underDev.png"
import './err.css'
function UnderDev() {
    return (
        <>
            <div className="aboutCont " style={{ marginTop: '1rem' }}>
                <div className="Pholder">
                    <img src={underDev}></img>
                    <p > This Feature is still under development visit out discord from more information.</p>
                </div>
            </div>
        </>
    );
}


export default UnderDev;    