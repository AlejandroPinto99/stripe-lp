import React from 'react'

//Style
import AboutStyle from './AboutUs.module.scss'

const Card = ({icon, title, content}) => {
    return(
        <div className={AboutStyle.about_card}>
            {icon}
            <h3 className={AboutStyle.card_title}>{title}</h3>
            <p className={AboutStyle.card_text}>{content}</p>
        </div>
    );
};

export default Card;