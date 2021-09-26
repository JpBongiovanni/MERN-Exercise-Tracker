import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg p-0">
                <Link to="/" className="navbar-brand px-2 bg-secondary">Exercise Tracker</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/stopwatch" className='nav-link'>Stop Watch</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }



}