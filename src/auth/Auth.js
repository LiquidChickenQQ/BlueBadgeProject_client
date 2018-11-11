import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
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
                        <Button type="button" onClick={this.handleClick}>{this.state.showSignup === true ? <h6>Sign In Here</h6> : <h6>Sign Up Here</h6>}</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Auth

// const Auth = (props) => {
//     return (
//         <Container className="auth-container">
//             <Row>
//                 <Col md="6">
//                     <Signup setToken={props.setToken} />
//                 </Col>
//                 <Col md="6" className="login-col">
//                     <Login setToken={props.setToken} />
//                 </Col>
//             </Row>
//         </Container>
//     );
// }


// export default Auth;