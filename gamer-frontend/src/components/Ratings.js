import React from 'react'
import { connect } from 'react-redux'
import { deleteGame } from '../actions/deleteGame'

const Ratings = (props) => {


    const handleDelete = (rating) => {
        props.deleteGame(rating.id, rating.game_id)
    }
    return (
        <div>
            {props.ratings && props.ratings.map(rating => 
              <h4 key={rating.id}> - {rating.number} - {rating.description}  <button onClick={() => handleDelete(rating)}>Delete</button></h4>  
                )}
        </div>
    )
}


export default connect(null, {deleteGame})(Ratings)