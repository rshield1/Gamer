export default function fetchGames() {
    return (dispatch) =>{
    //we are using thunk to return a function from the
    //action creator.
    fetch("http://localhost:4000/api/v1/games")
      .then(resp => resp.json())
      .then(data => dispatch({
          type: 'FETCH_GAMES',
          payload: data
      }))
    }


    //dispatch an action obj
}