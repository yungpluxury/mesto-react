import React, { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, cards, onCardClick, onCardLike, onCardDelete}) {

const currentUser = useContext(CurrentUserContext);



return (
    <main className="content">
        <section className="profile">
            <div className="profile__avatar-container">
                <button type="button" className="profile__avatar-edit-button" onClick={isEditAvatarPopupOpen}></button>
                <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя" />
            </div>                
            <div className="profile__info">
                <div className="profile__head">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button type="button" className="profile__edit-button" onClick={isEditProfilePopupOpen}></button>
                </div>
                <p className="profile__description">{currentUser.about}</p>
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
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                    />
                ))
            }
        </section>
    </main>
  );
}

export default Main;
