import React from 'react'

const Game = (props) => {
    return (
        <div>
            {props.game.name} - {props.game.price}
        </div>
    )
}

export default Game