import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return (
        <div className="card-container" key={props.monster.id}>
            <img className="card-image" alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h2> { props.monster.name } </h2>
            <a href={`mailto:${props.monster.email}`}> { props.monster.email } </a>
        </div>
    )
}