import {NavLink } from "react-router-dom"

const Project2 = () => {
    return (
        <NavLink className='project-nav' to={'/crafty'}>
            <div>
                <div className="df-header">
                    <h3 style={{textAlign: 'right'}}>Crafty (Etsy inspired)</h3>
                </div>
                <div className="project-middle">
                <div className="df-topright">
                    <ul className="project-list">
                        <li><span className="span-text-main">Role: </span><p>Full Stack Developer</p></li>
                        <li><span className="span-text-main">Duration: </span><p>June 2024 - August 2024</p></li>
                        <li><span className="span-text-main">Responsibilities: </span><p>UX/Ui Design, Wireframing, Frontend/Backend Development </p></li>

                    </ul>
                </div>
                <div className="df-topleft">
                    <p>E-commerce platform built with JavaScript, Express, and React, allowing users to buy and sell custom-made clothing, accessories, and cosplay props. Users can list items for sale, interact with products through a shopping cart, reviews, and favorites, while instantly making their items available for others to explore..</p>
                </div>
                </div>
                <div >
                    <img className="project-img" src="craftymock.png" alt="Crafty mockup image" />
                </div>
            </div>

        </NavLink>
    )
}


export default Project2;
