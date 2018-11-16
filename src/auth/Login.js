import React, { Component } from "react";
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import "./Auth.css";
import APIURL from'../helpers/enviornment';

class Login extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/api/login`, {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        });
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <h6>Login to the best friggin' FDA HACCP log in the classroom!</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Username</Label>
                        <Input id="li_email" type="email" name="email" placeholder="enter email" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} required/>
                    </FormGroup>
                    <button className="button-submit" type="submit"> Submit </button>
                </Form>
            </div>
        )
    }
}
export default Login;