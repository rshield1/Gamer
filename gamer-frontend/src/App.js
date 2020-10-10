import React from 'react';
import './App.css';
import GamesContainer from './containers/GamesContainer';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing';
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, } from 'react-router-dom';

class App extends React.Component{

  componentDidMount() {
    
  }

  render(){
    return (
      <Router>
        <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <GamesContainer />
        <Footer />
        </div>

      </Router>

    );

  }
}

// const mapStateToProps = (state) => ({
//   //i want access to this part of the store
//   games: state.games
// })

export default App;
