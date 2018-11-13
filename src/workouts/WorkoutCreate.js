import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Workout.css";


class WorkoutCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            results: '',
            description: '',
            definition: '',
            thawing: '',
            marinade: '',
            cooling:'',
        };
    }

    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
    })
}
    
    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/api/log/', {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token

            })
        })
            .then((res) => res.json())
                .then((logData) => {
                    this.props.updateWorkoutsArray();
                    this.setState({
                        id: '', 
                        results: '',
                        description: '',
                        definition: '',
                        thawing: '',
                        marinade: '',
                        cooling: '',
                    })
            })
}


render() {
    return (
        <div>
            <h3>Log a production batch</h3>
            <hr />
            {}
            <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                    <Label for="result">Batch Number</Label>
                    <Input id="results" type="text" name="results" value={this.state.results} placeholder="Batch #" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="def">Expiration Date</Label>
                    <Input type="text" name="definition" id="definition" value={this.state.definition} onChange={this.handleChange} placeholder="Date">
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="thawing">Thawing</Label>
                    <Input type="text" name="thawing" id="thawing" value={this.state.thawing} onChange={this.handleChange} placeholder="Date Initials">
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="marinade">Marinade</Label>
                    <Input type="text" name="marinade" id="marinade" value={this.state.marinade} onChange={this.handleChange} placeholder="Date Initials">
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Smoking</Label>
                    <Input id="description" type="text" name="description" value={this.state.description} placeholder="Date, Time, Initials" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="cooling">Cooling</Label>
                    <Input type="text" name="cooling" id="cooling" value={this.state.cooling} onChange={this.handleChange} placeholder="Temp, Exposure time, Initials">
                    </Input>
                </FormGroup>
                <Button type="submit" color="primary">Submit</Button>
            </Form>
        </div>
        )
    }
}

export default WorkoutCreate;