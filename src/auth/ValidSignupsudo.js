import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormErrors } from 'reactstrap';
import "./Auth.css";
import APIURL from'../helpers/enviornment';


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit = (event) => {
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
                        <Label for="email">Email</Label>
                        <Input value={this.state.email} id="su_email" typr="text" name="email" placeholder="enter email" onChange={(event) => this.handleUserInput(event)}  />
                        <FormErrors formErrors={this.state.formErrors} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input value={this.state.password} id="su_password" type="password" name="password" placeholder="enter password" onChange={(event) => this.handleUserInput(event)} />
                        <FormErrors formErrors={this.state.formErrors} /> 
                    </FormGroup>

                    <button className="button-submit" type="submit"> Submit </button>
                </Form>
            </div>
        )
    }
}
export default Signup;