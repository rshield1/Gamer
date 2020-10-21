import React from 'react'
// import Game from './Game'
import { Link } from 'react-router-dom'
import Button from './Button'


class Games extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
         return (
        //render each account
        //add a search component with a filter method
        <div className="container">
            <br/>
            <h1 className="text-primary"><i className="fas fa-gamepad"></i>   Games</h1>
                <hr/>
                <div className="main">
                    {this.props.games.map(game =>
                    <h5 className="bg-dark text-info" key={game.id}>
                    <Link to={`/games/${game.id}`}>{game.name}</Link>
                        <Button />
                    <hr/>
                    - ${game.price} - # of Ratings - {game.ratings.length}</h5>)}
                </div>     
            <br/>
        </div>
    )
    }
   
}

export default Games