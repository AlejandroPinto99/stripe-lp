import React from 'react'

//compoents
import Feature from './Feature';
import FeaturesStyle from './Features.module.scss'

//Icons
import Generic_Pic from '../../images/Generic_Pic'

const Features = () => {

    const content1 = "Break free from the constraints of off-the-shelf point of sale software. Stripe Terminal makes it easer to build yout point of sale and own your checkout experience, including creating customized email recelpts or spalsh screens. Our APIs and SKDs simplify the integration of Terminal into JavaScript web apps, or iOS and Android mobile apps.";
    const content2 = "Save months of developer and certification time with our EMV Level 1, 2, 3 pre-certified Stripe card readers. They provide end-to-end encryption, natively support chip cards and contacless payments, including Apple Pay and Google Pay, and help protect you against liability for counterfeit froud.";
    const content3 = "Manage your entire fleet of Stripe card readers right from the Stripe Dashboard, where you can register hardware to a location, monito devide status, and order card readers. We'll take care of delivering the hardware where you need it.";

    return(
        <div className={FeaturesStyle.features_container}>
            <Feature image={<Generic_Pic />} title={"BUILD YOUR PERFECT POINT OF SALE"} content={content1} link={"Explore the docs"} reverse={true}/>
            <Feature image={<Generic_Pic />} title={"PRE-CERTIFIED CARD READERS"} content={content2} link={"see reader options"} reverse={false}/>
            <Feature image={<Generic_Pic />} title={"CENTRALIZED FLEET MANAGMENT"} content={content3} link={"Learn more"} reverse={true}/>
        </div>
    )
}

export default Features;