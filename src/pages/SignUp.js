import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function SignUp() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if ( user.name && user.email && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div id="signUp">
            <div className="wrap-signup">
                <h1 className="dj-logo">회원가입</h1>
                <div className="wrap-signup-form">
                    <form name="form" onSubmit={handleSubmit}>
                        <span className="input-area">
                            <label htmlFor="email">E-MAIL</label>
                            <input type="text" name="email" value={user.email} onChange={handleChange} className={(submitted && !user.email ? ' is-invalid' : '')} />
                        </span>
                        {submitted && !user.email &&
                            <span className="error-msg">이메일은 필수입니다.</span>
                        }
                        <span className="input-area confirm">
                            <label htmlFor="password">PW</label>
                            <input type="password" name="password" value={user.password} onChange={handleChange} className={(submitted && !user.password ? ' is-invalid' : '')} />
                        </span>
                        {submitted && !user.password &&
                            <span className="error-msg">비밀번호는 필수입니다.</span>
                        }
                        <span className="input-area">
                            <label htmlFor="name">NAME</label>
                            <input type="text" name="name" value={user.name} onChange={handleChange} className={(submitted && !user.name ? ' is-invalid' : '')} />
                        </span>
                        {submitted && !user.name &&
                            <span className="error-msg">이름은 필수입니다.</span>
                        }
                        <button 
                            type="submit" 
                            className="btn-signup"
                            onClick={handleSubmit}
                            >
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            회원가입하기
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp ;