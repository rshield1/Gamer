import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
                <div className="container">
                <Link className="navbar-brand" to="/">Gamer</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/games">View Games</Link>
                    </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/games/new">Add Game</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar