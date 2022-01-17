import React from 'react'
import Image from 'next/image'

//icons
import TerminalLogo from '../icons/Header/TerminalLogo'
import Baner from '../../images/Baner'
import Phone from '../../images/stripe_phone.png'

//Style
import HeaderStyle from './Header.module.scss'

const Header = () => {
    return(
        <div className={HeaderStyle.header_container}>
            <div className={HeaderStyle.header_element_container}>
                <div>
                    <div className={HeaderStyle.header_content_box}>
                        <div className={HeaderStyle.terminal}>
                            <TerminalLogo />
                            <h3 className={HeaderStyle.terminal_text}>TERMINAL</h3>
                            <span className={HeaderStyle.terminal_only}>US ONLY</span>
                        </div>

                        <div className={HeaderStyle.header_information}>
                            <h2 className={HeaderStyle.title}>Extend Stripe payments to your point of sale</h2>
                            <p className={HeaderStyle.header_content}>Stripe Terminal extends your online presence into the physical world, enabling
                                you to build your own in-person checkout. Built with modern retailers and platforms in
                                mind, Terminal helps you unify our online and offline channel with flexible 
                                developer tools, pre-certified card readers, and cloud-based hardware management.
                            </p>
                        </div>

                        <div className={HeaderStyle.buttons_container}>
                            <button className={HeaderStyle.get_notified_btn}>
                                GET NOTIFIED
                            </button>
                            <button className={HeaderStyle.contact_sales_btn}>
                                CONTACT SALES
                            </button>
                        </div>
                    </div>
                </div>

                <div className={HeaderStyle.baner_box}>
                    <div className={HeaderStyle.baner}>
                        <Baner />
                    </div>    
                    <div className={HeaderStyle.phone}>
                        <Image src={Phone} alt="phone" height={400} width={200}/>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default Header;