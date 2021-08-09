import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButton = isOwn
    ? (<button className="element__trash-icon" type="button" onClick={handleDeleteClick} />)
    : null;
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    const cardLikeButtonClassName = `element__like 
    ${isLiked
        ? ('element__like_active')
        : ''}`;


    function handleCardClick() {
        onCardClick(card);
    }
    function handleLikeClick() {
        onCardLike(card);
    }
    function handleDeleteClick() {
        onCardDelete(card);
    }
    console.log(card);
    return (
        <figure className="element">
            <img className="element__image" src={card.link} alt={`${card.name}`} onClick={handleCardClick} />
            {cardDeleteButton}
            <figcaption className="element__name-container">
                <h2 className="element__name">{card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <p className="element__like-count">{card.likes.length}</p>
                </div>
            </figcaption>
        </figure>
    )
}


export default Card;