import React from 'react';

function PopupWithForm({ isOpen, onClose, name, title, children, buttonName }) {
  return (
      <div className={`popup popup_function_${name} ${isOpen && "popup_is-opened"}`}>
        <div className="popup__container">
          <button type="button" className="popup__close-button" onClick={onClose}></button>
          <h2 className="popup__title">{title}</h2>
          <form name={name} className="form">
            {children}
                <fieldset className="form__elements">
                    <button type="submit" className="form__save-button">{buttonName}</button>
                </fieldset>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;