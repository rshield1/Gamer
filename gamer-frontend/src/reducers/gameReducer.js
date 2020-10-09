//set up game reducer define different action types
//take in state, and actions. We will update the reducer.
//its just a function


export default function gameReducer(state = {games: []}, action) {
    return action.payload
}