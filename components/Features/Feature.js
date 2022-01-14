import React from 'react'

//Style
import FeatureStyle from './Features.module.scss'

const Feature = ({title, content, link, image, reverse}) => {
    return(
        <div className={`${reverse === false ? FeatureStyle.card_container: FeatureStyle.card_container_reverse}`}>
            <div className={FeatureStyle.information_container}>
                <h3>{title}</h3>
                <p>{content}</p>
                <div>
                    <p>{link}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height={50} width={100}
                    fill="none" viewBox="0 0 24 24" stroke="#6772E5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </div>
            <div>
                {image}
            </div>
        </div>
    );
};

export default Feature;