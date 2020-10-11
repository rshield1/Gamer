import React from 'react';
import './App.css';
import GamesContainer from './containers/GamesContainer';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing';
// import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component{

  componentDidMount() {
    
  }

  render(){
    return (
      <div>
          <Router>
            <div className="App">
              <Navbar />
              <Switch>
                 <Route exact path="/" component={Landing} />
              </Switch>
              <Switch>
              <GamesContainer />
              {/* <Route exact path="/games" component={GamesContainer} /> */}
              </Switch>     
              <Footer />
            </div>
        </Router>
      </div>
    
    );

  }
}

// const mapStateToProps = (state) => ({
//   //i want access to this part of the store
//   games: state.games
// })

export default App;
