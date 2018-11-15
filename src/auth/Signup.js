import React, { Component } from "react";
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import "./Auth.css";
import APIURL from'../helpers/enviornment';


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleSubmit = (event) => {
        // console.log(this.state)
        event.preventDefault()
        fetch(`${APIURL}/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: this.state })
        }).then(response => response.json())
        .then((data) => {
            this.props.setToken(data.sessionToken)
        }); 
    }



    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Sign Up For the best FDA HACCP plan logging site in the classroom!</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="su_sername" typr="text" name="username" placeholder="enter username" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} required/>
                    </FormGroup>

                    <button className="button-submit" type="submit"> Submit </button>
                </Form>
            </div>
        )
    }
}
export default Signup;