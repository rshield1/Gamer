import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addRating } from '../actions/addRating'

class RatingInput extends Component {
    constructor(){
        super()
            this.state = {
            rating: null,
            description: ''
            }
  
    }
 
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addRating(this.state, this.props.game.id)
        this.setState({
            rating: null,
            description: ''
        })
    }


    render() {
        return (
            <div>
             Rating Input - Add a new Rating!!
             <br></br>
             <form onSubmit={this.handleSubmit}>
                 <label>Rating:</label>
                 <input type="text" name="rating" 
                    value={this.state.rating} 
                    onChange={this.handleChange}
                     />
                
                 <br></br>
                 <label>Description</label>
                 <input type="text" 
                    name="description" 
                    value={this.state.description} 
                    onChange={this.handleChange}/>
                    <input type="submit" />
             </form>
            </div>
        )
    }
}




export default  connect(null, {addRating})(RatingInput)