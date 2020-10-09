import React from 'react'
import Game from './Game'

const Games = (props) => {
    return (
        //render each account
        <div>
        
            {props.games.map(game => <h4 key={game.id}><Game game={game}/></h4>)}
        </div>
    )
}

export default Games