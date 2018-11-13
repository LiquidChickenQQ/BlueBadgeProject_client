import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "./Auth.css"

class Login extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/api/login", {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data.sessionToken);
            this.props.setToken(data.sessionToken)
        });
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <h6>Login to the best FDA HACCP log in the classroom!</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="li_username" type="username" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button className="button" type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}
export default Login;