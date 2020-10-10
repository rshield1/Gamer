import React, { Component } from 'react'
import Games from '../components/Games'
import GameInput from '../components/GameInput'
import { connect } from 'react-redux'
import fetchGames from '../actions/fetchGames'
import {Route, Switch} from 'react-router-dom'
import Game from '../components/Game'

class GamesContainer extends Component {

    componentDidMount() {
        this.props.fetchGames()
    }
    render() {
        return (
            <div className='gamescontainer'>
            <Switch>
                <Route path='/games/new' component={ GameInput } />
                <Route exact path='/games/:id'  render={(...routerProps) => <Game {...routerProps} games={this.props.games}/>} />
                <Route exact path='/games' render={(...routerProps) => <Games {...routerProps} games={this.props.games}/>} />
            </Switch>
            
            </div>
        )
    }
}

//   //i want access to this part of the store
const mapStateToProps = (state) => ({
    games: state.games
})


export default connect(mapStateToProps, { fetchGames })(GamesContainer)