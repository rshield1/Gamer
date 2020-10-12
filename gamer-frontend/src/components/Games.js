import React from 'react'
// import Game from './Game'
import { Link } from 'react-router-dom'



const Games = (props) => {
    return (
        //render each account
        //add a search component with a filter method
        <div className="container">
        <br/>
        <h1 className="text-primary"><i className="fas fa-gamepad"></i>   Games</h1>
            <hr/>
            <div className="main">
                {props.games.map(game =>
                <h5 className="card w-100 bg-dark text-info" key={game.id}>
                <Link to={`/games/${game.id}`}>{game.name}</Link><hr/>
                 - ${game.price} - Ratings - {game.ratings.length}</h5>)}
            </div>     
           <br/>
        </div>
    )
}

export default Games