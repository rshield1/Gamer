import React from 'react'

const Game = (props) => {


    console.log(props)

    let game = props.games[props[0].match.params.id - 1]
    return (
        <div>
        {game ? game.name : null} - {game ? game.price : null}
        </div>
    )
}

export default Game