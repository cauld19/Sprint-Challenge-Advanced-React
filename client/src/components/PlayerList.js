import React from "react";

import Player from "./Player"

const PlayerList = ({data}) => {
    return (
        <div className="player-list-container">
            <div>
                {data.map(player =>(
                    <Player
                        key={player.id}
                        country={player.country}
                        name={player.name}
                        searches={player.searches}
                    />
                ))}
          </div>

        </div>
    )
}

export default PlayerList;