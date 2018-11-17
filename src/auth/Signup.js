import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import  FormErrors  from "./FormErrors";
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
        this.setState({ [name]: value },
        () => {this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 5;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }
    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
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
                
                <div className="panel panel-default">
                <div className={`form-group</div>
                    ${this.errorClass(this.state.formErrors.email)}`}>
                </div>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input value={this.state.email} id="su_email" typr="text" name="email" placeholder="enter email" onChange={(event) => this.handleUserInput(event)}  />
                    </FormGroup>
                    <FormErrors className="formErrors" formErrors={this.state.formErrors} />
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input value={this.state.password} id="su_password" type="password" name="password" placeholder="enter password" onChange={(event) => this.handleUserInput(event)} />
                    </FormGroup>

                    <button className="button-submit" type="submit" disabled={!this.state.formValid}> Submit </button>
                </Form>
            </div>
        )
    }
}
export default Signup;