import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import fetchGames from './actions/fetchGames'

class App extends React.Component{

  componentDidMount() {
    this.props.fetchGames({type: 'FETCH_GAMES', payload: {name: 'Zelda'}})
  }

  render(){
    return (
      <div>
      <h1>Hello</h1>
      </div>
    );

  }
}

// const mapStateToProps = (state) => ({
//   //i want access to this part of the store
//   games: state.games
// })

export default connect(null, { fetchGames })(App);
