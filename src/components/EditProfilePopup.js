import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../validation/useFormWithValidation';

function EditProfilePopup({ onUpdateUser, isOpen, onClose }) {
  
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  const currentUser = useContext(CurrentUserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, isOpen, resetForm]);

  return (
    <PopupWithForm
      name="popup-profile"
      title="Редактировать профиль"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <input
        className={errors.name ? 'form__element-text form__element-text_type-error' : 'form__element-text'}
        type="text"
        id="profile-name"
        placeholder="Ваше имя"
        name="name"
        minLength="2"
        maxLength="40"
        value={values.name || ''}
        onChange={handleChange}
        required
      />
      <span id='name-error' className={errors.name ? 'form__input-error_active' : 'form__input-error'}>{errors.name}</span>
      <input
        className={errors.about ? 'form__element-text form__element-text_type-error' : 'form__element-text'}
        type="text"
        id="profile-about"
        placeholder="Расскажите о себе"
        name="about"
        minLength="2"
        maxLength="200"
        value={values.about || ''}
        onChange={handleChange}
        required
      />
      <span id='about-error' className={errors.about ? 'form__input-error_active' : 'form__input-error'}>{errors.name}</span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;