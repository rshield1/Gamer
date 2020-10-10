import React, { Component } from 'react'
import {connect} from 'react-redux'

class RatingInput extends Component {
    constructor(){
        super()
            this.state = {
            rating: '',
            description: ''
            }
  
    }
 
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div>
             Rating Input - Add a new Rating!!
             <br></br>
             <form>
                 <label>Rating:</label>
                 <select name="rating" value={this.state.rating} onChange={this.handleChange}>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                 </select>
                 <br></br>
                 <label>Description</label>
                 <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
             </form>
            </div>
        )
    }
}




export default  connect(null)(RatingInput)
