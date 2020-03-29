import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import Login from '../components/Login';

const LoginContainer = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    const googleLogin = (response) =>{

        if(response.accessToken)
        {
            dispatch(userActions.googleLogin(response.accessToken))
        }
    }

    const onSocialFailure = (response) =>{

    }

    return (
        <Login
            submitted={submitted}
            email={email}
            password={password}
            loggingIn={loggingIn}
            onChange={onChange}
            onSubmit={onSubmit}
            googleLogin={googleLogin}
            onSocialFailure={onSocialFailure}
        />
    );
};

export default LoginContainer;
