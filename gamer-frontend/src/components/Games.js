import React from 'react'

const Games = (props) => {
    return (
        //render each account
        <div>
        GAMES
            {props.games.map(game => <h4 key={game.id}>{game.name} - ${game.price}</h4>)}
        </div>
    )
}

export default Games