import React, { Component } from 'react'
import Games from '../components/Games'
import GameInput from '../components/GameInput'
import { connect } from 'react-redux'
import fetchGames from '../actions/fetchGames'

class GamesContainer extends Component {

    componentDidMount() {
        this.props.fetchGames()
    }
    render() {
        return (
            <div>
                 <GameInput />
                 <Games games={this.props.games}/>  
            </div>
        )
    }
}

//   //i want access to this part of the store
const mapStateToProps = (state) => ({
    games: state.games
})


export default connect(mapStateToProps, { fetchGames })(GamesContainer)