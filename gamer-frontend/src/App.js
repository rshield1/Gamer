import React from 'react';
import './App.css';
import GamesContainer from './containers/GamesContainer';

class App extends React.Component{

  componentDidMount() {
    
  }

  render(){
    return (
      <div>
      <GamesContainer />
      </div>
    );

  }
}

// const mapStateToProps = (state) => ({
//   //i want access to this part of the store
//   games: state.games
// })

export default App;
