import React from 'react';


const CardListPosition = ({positionCardList}) => {

    return (
        <div className='wrapperPosition'>
            {positionCardList && positionCardList.map(el => {
                return (
                    <div key={el.orderNumber}>
                        <p className='positionNumber'>{el.orderNumber}. {el.cardAttribute}</p>
                        <p className='positionValue' >{el.value}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default CardListPosition;