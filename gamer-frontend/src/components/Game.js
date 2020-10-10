import React from 'react'
import RatingsContainer from '../containers/RatingsContainer'

const Game = (props) => {


    let game = props.games[props[0].match.params.id - 1]
    return (
        <div>
       <h2>
        {game ? game.name : null} - {game ? game.price : null}
        </h2>
        <RatingsContainer game={game}/>

        </div>
 
    )
}

export default Game