import React from 'react'

//svg
import Stripe from "../images/Stripe"

const Nav = () => {
    return(
        <div className="nav_container">
            <div>
                <Stripe />
            </div>
            <div className="nav_section">
                <p>Products</p>
                <p>Developers</p>
                <p>Company</p>
                <p>Pircing</p>
            </div>
            <div className="nav_section">
                <p>Support</p>
                <div className="sign_in nav_section">
                    <p>Sign in</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15" width="25" fill="none" viewBox="0 0 24 24" stroke="gray">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Nav;