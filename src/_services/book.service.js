import {
    authHeader
} from '../_helpers';

export const bookService = {
    uploadThumnail
};
function uploadThumnail(file ) {

    console.log(file);
    var data = new FormData();
    data.append('imgFile', file);
    
    console.log('formData',data);

    let headers = authHeader();
    // headers['Content-Type'] = 'multipart/form-data';

    console.log(headers);
    return fetch(process.env.REACT_APP_API_URL+ `/books/upload`,{
        method : 'POST',
        headers : headers,
        body : data
    }).then(handleResponse)
    .then(({ location })=> {
        return location;
    });
}


function login(email, password) {
    return fetch(process.env.REACT_APP_API_URL + `/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
        .then(handleResponse)
        .then(({
            user,
            token
        }) => {
            user.token = token;
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

