import styles from './Card.module.scss';
import React, { useState } from 'react';


function Card({title, imageUrl, price, onFavorite, onPlus}){
    const [isAdded, setIsAdded] = useState();

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    };
    
    return(
        <div className={styles.card}>
    <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/unliked.svg" alt="Unliked"></img>
    </div>
    <img height={133} width={133} src={imageUrl} alt="Sneakers"></img>
    <h5>{title}</h5>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Price:</span>
            <b>{price}</b>
        </div>
        <img 
            className={styles.plus} 
            onClick={onClickPlus} 
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } 
            alt="Plus">
                
        </img>
    </div>
</div>
    );
}

export default Card;