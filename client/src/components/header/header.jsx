import './header.css'
import image from './image/background.jpeg'
function Header() {
    return (
        <div className="head-main">
            <div className="head-img">
                <img alt="img" src={image} />
            </div>
            <div className="head-text">
                <h1>Emergency.<span className="net">NET</span></h1>
                <h4>Bringing Gaps, Building Resilience</h4>
                <h5>Your Lifeline in Emergencies</h5>
                <button className="show">Locate Me</button>
            </div>
        </div>
    )
}

export default Header