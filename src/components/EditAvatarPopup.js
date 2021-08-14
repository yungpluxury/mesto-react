import React from 'react';
import { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../validation/useFormWithValidation';

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
    
    const {
        values,
        errors,
        isValid,
        handleChange,
        resetForm
      } = useFormWithValidation({});

    useEffect(() => {
        resetForm();
      }, [isOpen, resetForm])

    function handleSubmit(event) {
        event.preventDefault();

        onUpdateAvatar(values);
    }
  
    return (
        <PopupWithForm
            name="popup-add-avatar"
            title="Обновить аватар"
            textButton="Обновить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isDisabled={!isValid}
        >
        <input
            className={errors.avatar ? 'form__element-text form__element-text_type-error' : 'form__element-text'}
            type="url"
            id="avatar-link"
            placeholder="Ссылка на аватар"
            aria-label="ссылка"
            name="avatar"
            value={values.avatar || ''}
            onChange={handleChange}
            required
        />
        <span id='avatar-link-error'
        className={errors.avatar ? 'form__input-error_active' : 'form__input-error'}>{errors.avatar}</span>
      </PopupWithForm>
    );
  }
  
  export default EditAvatarPopup;