import React, { Component } from 'react'
import RatingInput from '../components/RatingInput'
import Ratings from '../components/Ratings'

class RatingsContainer extends Component {

    render() {
        return (
            <div>
                <RatingInput game={this.props.game} />
                <Ratings ratings={this.props.game && this.props.game.ratings} />
            </div>
        )
    }
}

export default RatingsContainer

