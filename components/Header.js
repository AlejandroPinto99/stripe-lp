import React from 'react'

const Header = () => {
    return(
        <div className="header_container">
            <div className="header_content_box">
                <div className="terminal">
                    <h3>Terminal</h3>
                    <span>US ONLY</span>
                </div>

                <div>
                    <h2 className="title">Extend Stripe payments to your point of sale</h2>
                    <p className="header_content">Stripe Terminal extends your online presence into the physical world, enabling
                        you to build your own in-person checkout. Built with modern retailers and platforms in
                        mind, Terminal helps you unify our online and offline channel with flexible 
                        developer tools, pre-certified card readers, and cloud-based hardware management.
                    </p>
                </div>

                <div className="buttons_container">
                    <button className="get_notified_btn">
                        GET NOTIFIED
                    </button>
                    <button className="contact_sales_btn">
                        CONTACT SALES
                    </button>
                </div>
            </div>
        </div>
      
    )
}

export default Header;