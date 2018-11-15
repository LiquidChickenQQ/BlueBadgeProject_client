import React from 'react';
import { Table } from 'reactstrap';
import "./Workout.css";

const WorkoutTable = (props) => {

    return (
        <div>
            <p className="log_heading">HACCP Production Log</p>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Batch #</th>
                        <th>Experation Date</th>
                        <th>Thawing</th>
                        <th>Marinade</th>
                        <th>Smoking</th>
                        <th>Cooling</th>
                        <th>Packaging</th>
                        <th>pH Test</th>
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
                                    <td>{workout.thawing}</td>
                                    <td>{workout.marinade}</td>
                                    <td>{workout.description}</td>
                                    <td>{workout.cooling}</td>
                                    <td>{workout.packaging}</td>
                                    <td>{workout.ph_test}</td>
                                    <td>
                                        <button className="button-delete" id={workout.id} onClick={props.delete} color="red">Delete</button>
                    <button className="button-update" id={workout.id} onClick={e => props.update(e, workout)} color="grey">Update</button>
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