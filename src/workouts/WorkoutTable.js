import React from 'react';
import { Table, Button } from 'reactstrap';

const WorkoutTable = (props) => {

    return (
        <div>
            <h3>HACCP Production Log</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Batch Number</th>
                        <th>Experation Date</th>
                        <th>Thawing</th>
                        <th>Marinade</th>
                        <th>Smoking</th>
                        <th>Cooling</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    
                        props.workouts.map((workout, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{workout.id}</th>
                                    <td>{workout.results}</td>
                                    <td>{workout.definition}</td>
                                    <td>{workout.description}</td>
                                    <td>{workout.thawing}</td>
                                    <td>{workout.marinade}</td>
                                    <td>{workout.cooling}</td>
                                    <td>
                                        <Button id={workout.id} onClick={props.delete} color="danger">Delete</Button>
                    <Button id={workout.id} onClick={e => props.update(e, workout)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default WorkoutTable;