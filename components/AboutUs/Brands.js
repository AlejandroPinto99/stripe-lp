import React from 'react'

//icons
import Instacart from '../icons/Brands/Instacart'
import Kickstarter from '../icons/Brands/Kickstarter'
import Lyft from '../icons/Brands/Lyft'
import Opentable from '../icons/Brands/Opentable'
import Pinterest from '../icons/Brands/Pinterest'

//Style
import AboutUs from './AboutUs.module.scss'

const Brands = () => {
    return(
        <div className={AboutUs.brands_container}>
            <Instacart  />
            <Kickstarter />
            <Lyft />
            <Opentable />
            <Pinterest />
        </div>
    )
}

export default Brands;