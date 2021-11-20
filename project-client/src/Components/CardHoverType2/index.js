import React from 'react'
import './style.scss'

const CardHoverType2 = (props) => {
    return (
        <>
            <div className={props.className + ' ' + "kzcard 1"}>
                <div className="kzcard_image"> <img src={props.img} alt='img' /> </div>
                <div className="kzcard_title kztitle-black hit-the-floor">
                <p>{props.name}</p>
                    {props.number}
                    
                </div>
                    
        </div>
        </>
    )
}

export default CardHoverType2
