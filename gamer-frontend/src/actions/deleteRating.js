export const deleteRating = (ratingID, gameID ) => dispatch => {

    fetch(`http://localhost:4000/api/v1/games/${gameID}/ratings/${ratingID}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => dispatch({
        type: 'DELETE_RATING',
        payload: data
    }))

    


}