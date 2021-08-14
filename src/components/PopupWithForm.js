import React from 'react';

function PopupWithForm({ children, name, title, textButton, isOpen, onClose, onSubmit, isDisabled }) {
  return (
    <section className={`popup popup_function_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className={"popup__container"}>
        <button
          className={"popup__close-button"}
          type={"button"}
          onClick={onClose}>
        </button>
        <h2 className={"popup__title"}>
          {title}</h2>
        <form
          className={"form"}
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            className={"form__save-button"}
            type={"submit"}
            disabled={isDisabled}>
            {textButton}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;