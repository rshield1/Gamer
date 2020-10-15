import React from 'react'
import RatingsContainer from '../containers/RatingsContainer'

const Game = (props) => {


    let game = props.games[props[0].match.params.id - 1]
    return (
        <div>
       <h1 className="container card text-primary">
        {game ? game.name : null} - ${game ? game.price : null}
        </h1>
        <RatingsContainer game={game}/>

        </div>
 
    )
}

export default Game