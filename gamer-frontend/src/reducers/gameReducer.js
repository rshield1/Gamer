//set up game reducer define different action types
//take in state, and actions. We will update the reducer.
//its just a function


export default function gameReducer(state = {games: []}, action) {
  switch (action.type) {

      case 'FETCH_GAMES':
          return {
              //this will return a brand new state
            games: action.payload
          }
          case 'ADD_GAME':
            return {
                //this will return a brand new state
              ...state,
              //all the prev games plus the new game
              games: [...state.games, action.payload]
            }
            
            case 'ADD_RATING':
            return {
                //this will return a brand new state
              ...state,
              //all the prev games plus the new rating
              games: [...state.games, action.payload]
            }
  
      default:
        return state
  }
    
}