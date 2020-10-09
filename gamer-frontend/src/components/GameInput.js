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
        this.props.addGame()

    }

    render() {
        return (
            //rating game id number description
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>Game name:</label>
                <input type="text" placeholder="name" value={this.state.name} name="name" onChange={this.handleChange}/>
                <br/>
                <label>Game price:</label>
                <input type="price" placeholder="price" value={this.state.price} name="price" onChange={this.handleChange} />
                <br/>
                <input type="submit" />
              </form>
            </div>
        )
    }
}

export default connect(null, { addGame })(GameInput)