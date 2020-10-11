
export const addRating = (rating, gameID) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/v1/games/${gameID}/ratings`, {
            method: 'POST',
            body: JSON.stringify(rating),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: "ADD_RATING",
            payload: data
        }))
    }
}

