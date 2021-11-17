import React from 'react'
import './style.scss'

const CardHoverType2 = (props) => {
    return (
        <>
            <div className={props.className + ' ' + "card 1"}>
                <div className="card_image"> <img src={props.img} alt='img' /> </div>
                <div className="card_title title-black hit-the-floor">
                <p>{props.name}</p>
                    {props.number}
                    
                </div>
                    
        </div>
        </>
    )
}

export default CardHoverType2
