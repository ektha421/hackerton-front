import React from 'react';
import '../../scss/SignUp.scss';

const SignUp = () => {
    return (
        <div id="signUp">
            <div className="wrap-signup">
                <h1 className="dj-logo">
                    <a href="/">
                    DJBOOKS
                    </a>
                </h1>
                <div className="wrap-signup-form">
                    <form action="">
                        <span className="input-area confirm">
                            <input type="text" id="id" placeholder="아이디"/>
                        </span>
                        <span className="input-area confirm">
                            <input type="password" id="password" placeholder="비밀번호"/>
                        </span>
                        <span className="input-area">
                            <input type="password" id="rePassword" placeholder="비밀번호 확인"/>
                        </span>
                        <span className="input-area">
                            <input type="text" id="email" placeholder="이메일"/>
                        </span>
                        <span className="input-area">
                            <input type="text" id="name" placeholder="이름"/>
                        </span>
                        <button className="btn-signup">회원가입하기</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;