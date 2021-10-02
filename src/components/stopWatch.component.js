import React, { Component } from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import './stopWatch.component.css';

function StopWatch() {
    return (
        <div className="main-section">
            <div classname="clock-holder"></div>
                <div className="stopwatch">
                    <DisplayComponent />
                    
                </div>
        </div>
    )
}

export default StopWatch;