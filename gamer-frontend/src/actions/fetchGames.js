export default function fetchGames() {
    return (dispatch) =>{
    //we are using thunk to return a function from the
    //action creator.
    console.log('c')
    fetch("http://localhost:4000/api/v1/games")
      .then(resp => resp.json())
      .then(data => {
        console.log('d')
        dispatch({
          type: 'FETCH_GAMES',
          payload: data
      })
      })
    }


    //dispatch an action obj
}