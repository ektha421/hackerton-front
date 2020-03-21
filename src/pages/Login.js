import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../_actions';

function Login( ) {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    return (
        <div id="login">
            <div className="wrap-login">
                <h1 className="dj-logo">로그인</h1>
                <div className="wrap-login-form">
                    <form name="form" onSubmit={handleSubmit}>
                        <span className="input-area">
                            <label htmlFor="email"> E-MAIL </label>
                            <input type="text" name="email" value={email} onChange={handleChange} className={(submitted && !email ? ' is-invalid' : '')} />
                        </span>
                        {submitted && !email &&
                            <span className="error-msg">이메일은 필수입니다.</span>
                        }
                        <span className="input-area">
                            <label htmlFor="password"> PW </label>
                            <input type="password" name="password" value={password} onChange={handleChange} className={(submitted && !password ? ' is-invalid' : '')} />
                        </span>
                        {submitted && !password &&
                            <span className="error-msg">비밀번호는 필수입니다.</span>
                        }
                        <button
                            className="btn-login"
                            type="button"
                            onClick={handleSubmit}
                        >
                            로그인
                        </button>
                    </form>
                </div>
                <nav className="menu">
                    <Link to="/signup"> 회원가입 </Link>
                    <Link to="#"> 아이디 찾기 </Link>
                    <Link to="#"> 비밀번호 찾기 </Link>
                </nav>
            </div>
        </div>
    );
}

export default Login ;