import React from 'react'
import { connect } from 'react-redux'
import { deleteRating } from '../actions/deleteRating'

const Ratings = (props) => {


    const handleDelete = (rating) => {
        props.deleteRating(rating.id, rating.game_id)
    }


    return (
        <div className="container card bg-light mb-3 opacity" style={{ width: '18rem' }}>
            {props.ratings && props.ratings.map(rating => 
              <h4 key={rating.id}> {rating.number} 
              <i className="fas fa-star text-warning"></i>'s 
              <br/>
              <div className="card-text">
               {rating.description}   
              </div>
              <br/>
             <button className="btn btn-danger" onClick={() => handleDelete(rating)}>Delete</button><hr/></h4>)}
        </div>
    )
}


export default connect(null, {deleteRating})(Ratings)