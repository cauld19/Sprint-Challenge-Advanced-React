import React from "react";

const Player = ({country, name, searches}) => {
    return (
        <div className="player-container">
            <p>name: {name} </p>
            <p>country: {country} </p>
            <p>searches: {searches} </p>
        </div>
    )
}

export default Player;