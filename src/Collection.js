import React from "react";
export function Collection({name, images}) {
    return (
        <div className="collection">
            <img className="collection__big" src={images} alt="Item"/>
            <h4>{name}</h4>
        </div>
    );
}