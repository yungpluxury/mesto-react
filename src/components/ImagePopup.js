import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup_function_image popup ${card.isOpen ? 'popup_is-opened' : ''}`}>
        <div className="popup__image-container">
            <button className="popup__close-button popup__close-button_function_image" onClick={onClose}></button>
            <img src={card?.link} alt={card?.name} className="popup__image" />
            <p className="popup__image-description">{card?.name}</p>
        </div>
    </div>
  );
}

export default ImagePopup;