export const addGame = (gameData) => {

        return (dispatch) => {
            fetch('http://localhost:4000/api/v1/games', {
                method: 'POST',
                body: JSON.stringify(gameData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => dispatch({
                type: "ADD_GAME",
                payload: data
            }))
        }
}

