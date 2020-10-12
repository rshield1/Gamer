import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addRating } from '../actions/addRating'


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

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addRating(this.state, this.props.game.id)
        alert('Rating Successfully Added')
        this.setState({
            rating: '',
            description: ''
        })

    }


    render() {
        return (
            <div>
             <h5>Rating Input - Add a new Rating!!</h5>
                <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center"><i className="fas fa-gamepad"></i>GAMER</h1>
                    <p className="lead text-center">Enter the rating of the game</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <input type="number" 
                            className="form-control form-control-lg" 
                            placeholder="Rating Between 1 - 10"
                            min="1"
                            max="10" 
                            name="rating" 
                            value={this.state.rating}
                            onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                        <textarea 
                            className="form-control form-control-lg" 
                            placeholder="Description" 
                            name="description"
                            value={this.state.description}
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




export default  connect(null, {addRating})(RatingInput)
