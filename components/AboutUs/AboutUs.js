import React from 'react'

//components
import Card from './Card'
import Brands from './Brands'

//icon
import UndefinedIcon from '../icons/undefined'
import Decoration from '../Header/Decoration'

//Style
import AboutStyle from './AboutUs.module.scss'

const AboutUs = () => {
    const content1 = "Manage all your online and offline sales in one place with a single Stripe integration, simplifying reporting and reconciliation. Terminal works seamlessly with Stripe Payments, Connect, and Billing.";
    const content2 = "Provide a seamless customer experience across channels, like reserving online and picking up in store. Our SDKs make it easy to integrate Stripe into your own mobile and web applications to accept in store payments";
    const content3 = "Add in-person payments to your platform or marketplace. Using Stripe Trerminal with Connect, you can onboard users for online and in-person payments, and unify their payouts across channels.";

    return(
        <div className={AboutStyle.about_container}>
            <div className={AboutStyle.cards_container}>
                <Card icon={<UndefinedIcon />} title={"Unify your payments stack"} content={content1}/>
                <Card icon={<UndefinedIcon />} title={"Own your in-store experience"} content={content2}/>
                <Card icon={<UndefinedIcon />} title={"Grow your platform's revenue"} content={content3}/>
            </div>
            <div>
                <Brands />
            </div>
        </div>
    );
};

export default AboutUs;