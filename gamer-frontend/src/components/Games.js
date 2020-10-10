import React from 'react'
// import Game from './Game'
import {Link} from 'react-router-dom'

const Games = (props) => {


    return (
        //render each account
        <div>
        <h1>Gamer Games</h1>
            <hr/>

            <div className="main">
                 {props.games.map(game => 
                <h4 key={game.id}><Link to={`/games/${game.id}`}>{game.name}</Link>
                 - ${game.price} - Ratings - {game.ratings.length}</h4>)}
            </div>
           
        </div>
    )
}

export default Games