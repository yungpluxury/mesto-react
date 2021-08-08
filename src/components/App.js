import React, {useState, useEffect} from 'react';

import '../App.css';
import '../index.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import RemovePlacePopup from './RemovePlacePopup'
import api from '../utils/api';

import { CurrentUserContext } from '../contexts/CurrentUserContext';



function App() {
  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    owner: { name: '' }
  });
  const [currentUser, setCurrentUser] = useState({
    name: 'Loading...',
    about: ''
  });
  const [cards, setCards] = useState([]);
  const [useCardId, setUseCardId] = useState('');

  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isRemovePlacePopupOpen, setIsRemovePlacePopupOpen] = useState(false);
  

  const handleAddPlaceSubmit = ({ name, link }) => {
    api.addCard({ name, link })
      .then(res => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleUpdateAvatar = ({ avatar }) => {
    api.changeUserAvatar({ avatar })
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();

      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleUpdateUserInfo = ({ name, about }) => {
    api.setUserInfoByApi({ name, about })
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then(res => {
        const newCards = cards.map(item => item._id === card._id ? res : item);
        setCards(newCards);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleCardDelete = () => {
    api.deleteCard(useCardId)
      .then(res => {
        const newCards = cards.filter(item => item._id === useCardId ? null : item);
        setCards(newCards);
        closeAllPopups();
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleTrashClick = (card) => {
    setIsRemovePlacePopupOpen(true)
    setUseCardId(card._id)
  }
  function handleEditAvatarClick() {
      setIsAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
      setIsProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(data) {
      setSelectedCard({
        isOpen: true,
        ...data
      });
  }

  function closeAllPopups() {
      setSelectedCard({
        isOpen: false,
        owner: { name: '' }
      });
      setIsAddPlacePopupOpen(false);
      setIsAvatarPopupOpen(false);
      setIsProfilePopupOpen(false);
      setIsRemovePlacePopupOpen(false);
  }

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);
  useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(res)
      })
      .catch(err => console.log(`Error: ${err}`))
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main onCardClick={handleCardClick}
        isEditAvatarPopupOpen={handleEditAvatarClick}
        isEditProfilePopupOpen={handleEditProfileClick}
        isAddPlacePopupOpen={handleAddPlaceClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleTrashClick}
         />
      <Footer />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUserInfo}
      />
      <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
      />
      <RemovePlacePopup
          isOpen={isRemovePlacePopupOpen}
          onClose={closeAllPopups}
          onDeleteCard={handleCardDelete}
      />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
