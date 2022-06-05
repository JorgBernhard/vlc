import './style.css';
import Design from '../../assets/Jorg-work.jpeg';
import Code from '../../assets/code.png';
import Meeting from '../../assets/meeting.png';
import Server from '../../assets/server.jpg';

function Header() {
    return (
        <>
        <div className="header">
            <div className="Nome">
                <h1 className="visual">Visual</h1>
                <h1 className="life">life</h1>
                <div className="box"></div>
                <h1 className="creations">creations</h1>
            </div>
             <div className="links">
                 <a className="Home" href=" " alt="home">Home</a>
                 <a className="Us" href=" " alt="us">About us</a>
                 <a className="Projects" href=" " alt="hprojects">Projects</a>
                 <a className="Contact" href=" " alt="contact">Contact</a>
             </div>
        </div>
        <div className="container">
            <h2 className="slogan">By creating art, design and devleoping - changing the World!</h2>
        </div>
        <div className="center">
            <div className="Art">
                <h3>Art</h3>
                <h4>We are a team, specialized in creating. From the layout to a new design up to the finishing touch.
                Tailer-made production inovation.  We creat digital aplications from basic web-sites and mobile products.</h4>
                <div className="Design">
                <img src={Design} alt=""/>
                </div>
            </div>
            <div className="Front">
                <h3>Front</h3>
                <div className="Code">
                <img src={Code} alt=""/>
                </div>
                <h4>Our specialized front-end team, using Java Script,  librarys such as react, ui, developing and creating aplications 
                for web and Mobile, integrating your need where ever you are. Stay connected to your business all the time. Let us know how we can help you or your company.</h4>
            </div>
            <div className="Server">
                <h3>Server</h3>
                <div className="Server-room">
                   <img src={Server} alt=""/>
                </div>
                <h4>We do ti all, specialized in programing, back-end and setting up you server. From the coud-server or even you own 
                    privat company-server, all connected. Security updates, email-servers, just Tailer-made designed for your company.</h4>
            </div>
            <div className="Office">
            <h3>Office</h3>
            <h4>We even re-estructure your office, if you like. Set up the perfect wifi conections and router. Conect all printers an scanners 
                to your system. Organize and connect your  meeting-rooms to a secure network, so  you can savely have meetings without any 
                deanger of steeling information. We do it all, just let us konw how we can help you and your 
                company.</h4>
                <div className="Meeting">
                <img src={Meeting} alt=""/>
                </div>
            </div>
        </div>
        <footer>Visual Life Creations - Art & Design © 2022 All right reserved.</footer>
      </> 
    )
};

export default Header;
