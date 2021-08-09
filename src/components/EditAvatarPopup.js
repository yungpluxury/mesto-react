import React from 'react';
import {useEffect, useRef} from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
    

    const avatarRef = useRef('');

    useEffect(() => {
        avatarRef.current.value = '';
    }, [isOpen])

    function handleSubmit(event) {
        event.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }
  
    return (
        <PopupWithForm
            name={"popup-add-avatar"}
            title={"Обновить аватар"}
            textButton={"Обновить"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
        <input
            className={"form__element-text"}
            type={"url"}
            placeholder={"Ссылка на аватар"}
            name={"popup-input-url-avatar"}
            ref={avatarRef}
            minLength={"7"}
            maxLength={"300"}
            required
        />
        <span id={"popup-input-url-avatar-error"} className={"form__input-error"}></span>
      </PopupWithForm>
    );
  }
  
  export default EditAvatarPopup;