import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addRating } from '../actions/addRating'

class RatingInput extends Component {
    constructor(){
        super()
            this.state = {
            rating: '1',
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
        this.props.addRating(this.state, this.props.id)

    }


    render() {
        return (
            <div>
             Rating Input - Add a new Rating!!
             <br></br>
             <form onSubmit={this.handleSubmit}>
                 <label>Rating:</label>
                 <select name="rating" 
                    value={this.state.rating} 
                    onChange={this.handleChange}>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                 </select>
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
