import React from 'react'
// import Game from './Game'
import {Route, Link} from 'react-router-dom'

const Games = (props) => {
    return (
        //render each account
        <div>
        
            {props.games.map(game => 
                <h4 key={game.id}><Link to={`/games/${game.id}`}>{game.name}</Link></h4>)}
        </div>
    )
}

export default Games