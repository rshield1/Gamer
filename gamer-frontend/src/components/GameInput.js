import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { addGame } from '../actions/addGame'


class GameInput extends Component {
    constructor(props){  
        super(props);  

        this.state = {  
             name: '',
             price: ''  
          } 
      } 

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addGame(this.state)
        alert('Game Successfully Added')
        //reset state
        this.setState({
            name: '',
            price: ''
        })

    }

    render() {
        return (
            //rating game id number description
            <div>
            Add a new Game!!
              <div className="container">
              <div className="row">
                  <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center"><i className="fas fa-gamepad"></i> GAMER</h1>
                  <p className="lead text-center">Enter the rating of the game</p>
                  <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                      <input type="text" 
                          className="form-control form-control-lg" 
                          placeholder="Name of Game" 
                          name="name" 
                          value={this.state.name}
                          onChange={this.handleChange} />
                      </div>
                      <div className="form-group">
                      <input type="price" 
                          className="form-control form-control-lg" 
                          placeholder="Price" 
                          name="price"
                          value={this.state.price}
                          onChange={this.handleChange}
                          />
                      </div>
                      <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                  </div>
              </div>
          </div>
          </div>
        )
    }
}

export default connect(null, { addGame })(GameInput)