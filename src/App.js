import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from './components/create-user.component';
import StopWatch from './components/stopWatch.component';

function App() {
  return (
    <Router>
      <div className="container border p-0">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/stopwatch" component={StopWatch} />
      </div>
    </Router>
  );
}

export default App;
