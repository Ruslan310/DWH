import React from "react";

const Modal = ({infoMessage, textInfoMessage}) =>{

    const closeItModal = () =>{
        infoMessage('')
    }

    return (
        <div className={textInfoMessage ? 'modal active' : 'modal'}
             onClick={closeItModal}>
            <div className={textInfoMessage ? 'modalContent active' : 'modalContent'}
                 onClick={e => e.stopPropagation()}>
                <p className='modalText'>{textInfoMessage}</p>
            </div>
        </div>
    )
}

export default Modal