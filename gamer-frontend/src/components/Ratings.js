import React from 'react'
import { connect } from 'react-redux'
import { deleteRating } from '../actions/deleteRating'

const Ratings = (props) => {


    const handleDelete = (rating) => {
        props.deleteRating(rating.id, rating.game_id)
    }
    return (
        <div className="card">
            {props.ratings && props.ratings.map(rating => 
              <h4 key={rating.id}> {rating.number} 
              <i class="fas fa-star"></i>'s 
              <br></br>
              {rating.description} 
             <button onClick={() => handleDelete(rating)}>Delete</button>
             </h4>)}
        </div>
    )
}


export default connect(null, {deleteRating})(Ratings)