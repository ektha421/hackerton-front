import {
    authHeader,
    history
} from '../_helpers';

export const bookService = {
    uploadThumnail,
    addBook,
    getBookInfo,
    addReview,
    allBookList
};
function uploadThumnail(file ) {

    var data = new FormData();
    data.append('imgFile', file);
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
function addBook(book){
    let headers =authHeader();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    
    return fetch(process.env.REACT_APP_API_URL+ `/books`,{
        method : 'POST',
        headers : headers,
        body: book,
        redirect : 'follow'
    }).then(handleResponse);   
}

function getBookInfo(id) {
    let headers = authHeader();

    return fetch(process.env.REACT_APP_API_URL + `/books/${id}`, {
        method: 'GET',
        headers: headers
    }).then(handleResponse);
}


function addReview(reviewBody){
    let headers = authHeader();
    headers.append("Content-Type", "application/json");

    let body = JSON.stringify(reviewBody);
    return fetch(process.env.REACT_APP_API_URL + `/reviews`, {
        method: 'POST',
        headers: headers,
        body  
    }).then(handleResponse);
}

function allBookList(page,limit){
    let headers = authHeader();

    return fetch(process.env.REACT_APP_API_URL + "/books", {
        method: "GET",
        headers: headers,
        params: {
        page: page,
        limit: limit
    }
    }).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        if (!response.ok) {
            if (response.status === 401) {
                alert('로그인을 하셔야 합니다.');
                history.push('/login');
                // eslint-disable-next-line no-restricted-globals
                // location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        const data = text && JSON.parse(text);

        return data;
    });
}
