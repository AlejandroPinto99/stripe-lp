import React from 'react'

const Decoration = ({width, color, padding}) => {
    return(
        <div style={{width: width,
                     backgroundColor: color,
                     paddingTop: padding,
                       }}>

        </div>
    )
}

export default Decoration;