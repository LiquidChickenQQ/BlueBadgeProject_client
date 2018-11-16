import React, { Component } from "react";
import { Container, Row, Col, } from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";
import "./Auth.css"

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSignup: true
        }
    }

    handleClick = (event) => {
        if(this.state.showSignup === true) {
        this.setState({ showSignup: false })
        } else {
            this.setState({ showSignup: true })
        }
    }

    render() {
        return (
            <Container className="auth-container">
                <Row>
                    <Col md="12">
                        {this.state.showSignup === true ? <Signup setToken={this.props.setToken} /> : <Login setToken={this.props.setToken} />}
                        <br></br>
                        <button className="button" type="button" onClick={this.handleClick}>{this.state.showSignup === true ? <p>Go To Login</p> : <p>Go To SignUp</p>}</button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Auth