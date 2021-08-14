import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../validation/useFormWithValidation';


function AddPlacePopup({ onAddPlace, isOpen, onClose }) {

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace(values);
  }

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm])

  return (
    <PopupWithForm
      name="popup-add-card"
      title="Новое место"
      textButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <input
        className={errors.name ? 'form__element-text form__element-text_type-error' : 'form__element-text'}
        type="text"
        aria-label="Название места"
        id="photo-title"
        placeholder="Название"
        name="name"
        minLength="2"
        maxLength="30"
        value={values.name || ''}
        onChange={handleChange}
        required
      />
      <span id='name-error' className={errors.name ? 'form__input-error_active' : 'form__input-error'}>{errors.name}</span>
      <input
        className={errors.link ? 'form__element-text form__element-text_type-error' : 'form__element-text'}
        type="url"
        aria-label="Ссылка на картинку"
        placeholder="Ссылка на картинку"
        name="link"
        minLength="7"
        maxLength="300"
        value={values.link || ''}
        onChange={handleChange}
        required
      />
      <span id='link-error' className={errors.name ? 'form__input-error_active' : 'form__input-error'}>{errors.link}</span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;