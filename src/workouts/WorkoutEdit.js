import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';


class WorkoutEdit extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            results: '',
            description: '',
            definition: '',
            thawing: '',
            marinade: '',
            cooling: '',
            ph_test: '',
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.workout.id,
            results: this.props.workout.results,
            description: this.props.workout.description,
            definition: this.props.workout.definition,
            thawing: this.props.workout.thawing,
            marinade: this.props.workout.marinade,
            cooling: this.props.workout.cooling,
            ph_test: this.props.workout.ph_test,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    
    render() {
        return (
            <div>
                <Modal isOpen={true}> 
                    <ModalHeader >Update a Log</ModalHeader>
                    <ModalBody>
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
                <FormGroup>
                    <Label for="ph_test">pH Test</Label>
                    <Input type="text" name="ph_test" id="ph_test" value={this.state.ph_test} onChange={this.handleChange} placeholder="pH Test Results">
                    </Input>
                </FormGroup>            
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>

                </Modal>

            </div>
        )
    }
}
export default WorkoutEdit;