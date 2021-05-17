import {Component} from "react";
import {connect} from "react-redux";

import {registerUser} from "../../../../store/reducer/auth/operations";

import {initialState} from "./initialState";

class RegisterForm extends Component {
    state = {...initialState}

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState(initialState)
    }

    render(){
        const {handleChange, handleSubmit} = this;
        return (
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (body) => dispatch(registerUser(body))
    }
}

export default connect(null, mapDispatchToProps)(RegisterForm);