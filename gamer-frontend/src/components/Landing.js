import React, { Component } from 'react'
import { Link } from 'react-router-dom'





class Landing extends Component {


    render() {
        return (
            <div className="landing">
            <div className="dark-overlay landing-inner text-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4"><i className="fas fa-gamepad"></i>Gamer
                    </h1>
                    <p className="lead"> Add and rate awesome games for the community</p>
                    <hr />
                    <Link to="/games" className="btn btn-lg btn-info mr-2">View Collection</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}


export default Landing