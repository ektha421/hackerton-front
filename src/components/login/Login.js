import React from 'react';
import '../../scss/Login.scss';

const Login = () => {
    return (
        <div id="login">
            <div className="wrap-login">
                <h1 className="dj-logo">
                    <a href="/">
                    DJBOOKS
                    </a>
                </h1>
                <div className="wrap-login-form">
                    <form action="">
                        <span className="input-area">
                            <label htmlFor="id">ID</label>
                            <input type="text" id="id" />
                        </span>
                        <span className="input-area">
                            <label htmlFor="password">PW</label>
                            <input type="password" id="password" />
                        </span>
                        <button className="btn-login">로그인</button>
                    </form>
                </div>
                <nav className="signup">
                    <a href="#1">회원가입</a>
                    <a href="#1">아이디 찾기</a>
                    <a href="#1">비밀번호 찾기</a>
                </nav>
            </div>
        </div>
    );
}

export default Login;
