import React from 'react'

const Ratings = (props) => {
    return (

        <div>
            {props.ratings && props.ratings.map(rating => 
              <h4 key={rating.id}> - {rating.number} - {rating.description}</h4>  
                )}
        </div>
    )
}


export default Ratings