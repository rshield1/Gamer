import React from 'react'
// import Game from './Game'
import { Link } from 'react-router-dom'



const Games = (props) => {
    return (
        //render each account
        //add a search component with a filter method
        <div className="container">
        <br/>
        <h1><i className="fas fa-gamepad"></i>Gamer Games</h1>
            <hr/>
            <div className="main">
                {props.games.map(game =>
                <p className="card w-75 bg-dark text-white" key={game.id}>
                <Link to={`/games/${game.id}`}>{game.name}</Link>
                 - ${game.price} - Ratings - {game.ratings.length}</p>)}
            </div>     
           
        </div>
    )
}

export default Games