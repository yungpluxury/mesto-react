import React from "react";

function Card({ card, onCardClick }) {
    function handleCardClick() {
        onCardClick(card);
    }
    console.log(card);
    return (
        <figure className="element">
            <img className="element__image" src={card.link} alt="фото карточки" onClick={handleCardClick} />
            <button type="button" className="element__trash-icon"></button>
            <figcaption className="element__name-container">
                <h2 className="element__name">{card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className="element__like"></button>
                    <p className="element__like-count">{card.likes.length}</p>
                </div>
            </figcaption>
        </figure>
    )
}


export default Card;