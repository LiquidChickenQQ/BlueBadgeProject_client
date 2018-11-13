import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';
import WorkoutTable from './WorkoutTable';
import WorkoutEdit from './WorkoutEdit';
import "./Workout.css";
import APIURL from'../helpers/enviornment';


class WorkoutIndex extends Component{
    constructor(props) {
        super(props)
        this.state = {
            workouts: [],
            updatePressed: false, 
            workoutToUpdate: {} 
        }
    }
    componentWillMount() {
        this.fetchWorkouts();
    }

    fetchWorkouts = () => {
        fetch(`${APIURL}/api/log/`, { 
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
          .then((res) => res.json())
          .then((logData) => {
            return this.setState({ workouts: logData })
          })
      }
    workoutDelete = (event) => {
        fetch(`${APIURL}/api/log/${event.target.id}`, {
          method: 'DELETE',
          body: JSON.stringify({ log: { id: event.target.id } }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
        .then((res) => this.fetchWorkouts())
      }

    
      workoutUpdate = (event, workout) => {
        fetch(`${APIURL}/api/log/${workout.id}`, {
          method: 'PUT',
          body: JSON.stringify({ log: workout }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
        .then((res) => {
          this.setState({ updatePressed: false })
          this.fetchWorkouts();
        })
      }
      setUpdatedWorkout = (event, workout) => {
        this.setState({
            workoutToUpdate: workout, 
            updatePressed: true 
        })
    }



    render() {
        const workouts = this.state.workouts.length >= 1 ?
            <WorkoutTable workouts={this.state.workouts}
                delete={this.workoutDelete} update={this.setUpdatedWorkout} /> : <h2>Log a batch to see table</h2>
        return (
            <Container>
                <Row>
                    <Col md="3">
                        <WorkoutCreate token={this.props.token} updateWorkoutsArray={this.fetchWorkouts}/> 
                    </Col>
                    <Col md="9">
                        {workouts}
                    </Col>
                    <Col md="12">
                    {
                     this.state.updatePressed ? <WorkoutEdit t={this.state.updatePressed} update={this.workoutUpdate} workout={this.state.workoutToUpdate} /> //2
            : <div></div>}
                    </Col>
                </Row>
            </Container>
    )
}

}
export default WorkoutIndex;