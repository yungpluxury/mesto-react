import React, {useState} from 'react';
import '../App.css';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function handleEditAvatarClick() {
      setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
      setIsProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
  }


  function handleCardClick(props) {
      setSelectedCard(props);;
  }
  function closeAllPopups() {
      setSelectedCard(null);
      setIsAddPlacePopupOpen(false);
      setIsAvatarPopupOpen(false);
      setIsProfilePopupOpen(false);
  }
  return (
    <div className="page">
      <Header />
      <Main onCardClick={handleCardClick}
        isEditAvatarPopupOpen={handleEditAvatarClick}
        isEditProfilePopupOpen={handleEditProfileClick}
        isAddPlacePopupOpen={handleAddPlaceClick} />
      <Footer />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title="Обновить аватар"
        name="edit-avatar"
        buttonName="Сохранить"
      >
        <input
          className="form__element-text"
          type="url"
          name="avatar"
          required
          placeholder="Ссылка на аватар"
        />
        <span
          id="avatar-error"
          className="form__input-error"
        >
        </span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Новое место"
        name="add-place"
        buttonName="Создать"
      >
        <input
          required
          name="place-name"
          type="text"
          className="form__element-text"
          placeholder="Название места"
          minLength="2"
          maxLength="30"
        />
        <span
          id="place-name-error"
          className="form__input-error">
        </span>
        <input
          required
          name="place-url"
          type="url"
          className="form__element-text"
          placeholder="Ссылка на картинку"
        />
        <span
          id="place-url-error"
          className="form__input-error">
        </span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
        buttonName="Сохранить"
      >
        <input
          required
          name="profile-name"
          type="text"
          className="form__element-text"
          placeholder="Имя пользователя"
          minLength="2"
          maxLength="40"
        />
        <span
          id="profile-name-error"
          className="form__input-error">
        </span>
        <input
          required
          name="profile-job"
          type="text"
          className="form__element-text"
          placeholder="Описание"
          minLength="2"
          maxLength="200"
        />
        <span
          id="profile-job-error"
          className="form__input-error">
        </span>

      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        name="confirm-delete"
        title="Вы уверены?"
        buttonName="Да"
      >
      </PopupWithForm>


    </div>
  );
}

export default App;
