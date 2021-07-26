import React, {useState, useEffect} from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen,onCardClick}) {
const [userName, setUserName] = useState('');
const [userDescription, setUserDescription] = useState('');
const [userAvatar, setUserAvatar] = useState('');
const [cards, setCards] = useState([]);

useEffect(() => {
    api.getUserInfo()
        .then(res => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        })
        .catch((err) => console.log(err));
    api.getInitialCards()
        .then(res => {
            setCards(res);
        })
        .catch((err) => console.log(err));
}, []);

return (
    <main className="content">
        <section className="profile">
            <div className="profile__avatar-container">
                <button type="button" className="profile__avatar-edit-button" onClick={isEditAvatarPopupOpen}></button>
                <img className="profile__avatar" src={`${userAvatar}`} alt="Аватар пользователя" />
            </div>                
            <div className="profile__info">
                <div className="profile__head">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" className="profile__edit-button" onClick={isEditProfilePopupOpen}></button>
                </div>
                <p className="profile__description">{userDescription}</p>
            </div>
            <button type="button" className="profile__add-button" onClick={isAddPlacePopupOpen}></button>
        </section>
        <section className="elements">
            {
                cards.map(card => (
                    <Card
                        card={card}
                        key={card._id}
                        onCardClick={onCardClick}
                    />
                ))
            }
        </section>
    </main>
  );
}

export default Main;
