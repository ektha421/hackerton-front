import React, { useState, useCallback } from 'react';
import '../scss/SignUp.scss';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

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

    //비밀번호와 비밀번호 체크가 다를 경우를 검증
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            if (password !== passwordCheck) {
                return setPasswordError(true);
            }
            console.log({
                email,
                password,
                passwordCheck,
                name,
            });
        },
        [email, name, password, passwordCheck],
    );

    //비밀번호를 입력할때마다 password 를 검증하는 함수
    const onChangePasswordChk = useCallback(
        e => {
            setPasswordError(e.target.value !== password);
            setPasswordCheck(e.target.value);
        },
        [password],
    );

    //input change hook(password,name)
    const useInput = (initValue = null) => {
        const [value, setValue] = useState(initValue);
        const handler = useCallback(e => {
            setValue(e.target.value);
        }, []);
        return [value, handler];
    };

    const [password, onChangePassword] = useInput('');
    const [name, onChangeName] = useInput('');

    return (
        <div id="signUp">
            <div className="wrap-signup">
                <h1 className="dj-logo">
                    <a href="/">DJBOOKS</a>
                </h1>
                <div className="wrap-signup-form">
                    <form action="" onSubmit={onSubmit}>
                        <span className="input-area">
                            <label htmlFor="email">이메일</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                placeholder="이메일"
                                required
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
                                이메일 형식에 맞지 않습니다.
                            </div>
                        )}
                        <span className="input-area confirm">
                            <label htmlFor="password">비밀번호</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                placeholder="비밀번호"
                                required
                            />
                        </span>
                        <span className="input-area">
                            <label htmlFor="rePassword">비밀번호 확인</label>
                            <input
                                type="password"
                                id="rePassword"
                                name="rePassword"
                                value={passwordCheck}
                                onChange={onChangePasswordChk}
                                placeholder="비밀번호 확인"
                                required
                            />
                        </span>
                        {passwordError && (
                            <div
                                style={{
                                    color: 'red',
                                    textAlign: 'right',
                                    padding: '5px 0',
                                }}
                            >
                                비밀번호가 일치하지 않습니다.
                            </div>
                        )}
                        <span className="input-area">
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={onChangeName}
                                placeholder="이름"
                                required
                            />
                        </span>
                        <button type="submit" className="btn-signup">
                            회원가입하기
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
