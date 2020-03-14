import { useState } from 'react'
import axios from 'axios';
const qs = require('querystring');

let user = JSON.parse(localStorage.getItem('user'));

//action
const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST';
const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';
const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE';


export const loginApi = ({ history }) => async ()  => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
    // console.log('${config.apiUrl}/auth/login');
        //qs 는 formData 던질때 씀
    const response = await axios
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

    return response;
}

//초기값
const initialState = user ? { loggedIn : true, user } : {};

//리듀서
export default function authentication(state = initialState, action){
    switch (action.type) {
        case LOGIN_REQUEST:
          return {
            loggingIn: true,
            user: action.user
          };
        case LOGIN_SUCCESS:
          return {
            loggedIn: true,
            user: action.user
          };
        case LOGIN_FAILURE:
          return {};
        default:
          return state
  }
}