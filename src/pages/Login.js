import React, {
    useState,
    useCallback
} from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
import '../scss/Login.scss';
import axios from 'axios';
const qs = require('querystring');

const Login = ({
    history
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);

    //email 형식 검증
    const onChangeEmail = useCallback(
        e => {
            const inputChk = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

            setEmail(e.target.value);
            if (email.match(inputChk)) {
                setEmailError(false);
                setEmail(e.target.value);
            } else if (e.target.value === '') {
                setEmailError(false);
            } else {
                setEmailError(true);
            }
        },
        [email],
    );

    const onChangePassword = useCallback(e => {
        return setPassword(e.target.value);
    });

    const onClickLoginBtn = useCallback(e => {
        
        // console.log('${config.apiUrl}/auth/login');
        //qs 는 formData 던질때 씀
        axios
            .post(
                process.env.REACT_APP_API_URL+'/auth/login',
                qs.stringify({
                    email,
                    password
                }), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                },
            )
            .then(res => {
                console.log(res);
                let token = res.data.token;
                localStorage.setItem('token', token);
                history.push('/');
            })
            .catch(err => {
                console.log(err);
                if (err.response.status !== 200) {
                    alert('로그인이 실패하였습니다');
                }
            });
    });

    return ( 
        <div id="login">
        <div className="wrap-login">
            <h1 className="dj-logo">
                <a href="/"> DJBOOKS </a>
            </h1>
            <div className="wrap-login-form">
                <form>
                    <span className="input-area">
                        <label htmlFor="email"> E-MAIL </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={onChangeEmail}
                        />
                    </span>
                    {emailError && (
                        <div
                            style={{
                                color: 'red',
                                textAlign: 'right',
                                padding: '5px 0',
                            }}
                        >
                            이메일이 맞지 않습니다.
                        </div>
                    )}
                    <span className="input-area">
                        <label htmlFor="password"> PW </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </span>
                    <button
                        onClick={onClickLoginBtn}
                        className="btn-login"
                        type="button"
                    >
                        로그인
                    </button>
                </form>
                <div className="sns-login">
                    <button> Google 로그인 </button>
                    <button> Kakao 로그인 </button>
                    <button> Naver 로그인 </button>
                </div>
            </div>
            <nav className="menu">
                <a href="/signup"> 회원가입 </a>
                <a href="#"> 아이디 찾기 </a>
                <a href="#"> 비밀번호 찾기 </a>
            </nav>
        </div>
    </div>
    );
};

export default Login;