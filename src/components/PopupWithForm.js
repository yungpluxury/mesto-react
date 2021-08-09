import React from 'react';

function PopupWithForm({ children, name, title, textButton, isOpen, onClose, onSubmit }) {
  const className = `popup popup_function_${name} ${isOpen ? 'popup_is-opened' : ''}`;

  return (
    <section className={className}>
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
        >
          {children}
          <button
            className={"form__save-button"}
            type={"submit"}>
            {textButton}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;