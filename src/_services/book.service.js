import {
    authHeader
} from '../_helpers';

export const bookService = {
    uploadThumnail,
    addBook,
    getBookInfo
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

    console.log(book);
    let headers =authHeader();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    
    return fetch(process.env.REACT_APP_API_URL+ `/books`,{
        method : 'POST',
        headers : headers,
        body: book,
        redirect : 'follow'
    }).then(handleResponse);   
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

function getBookInfo(id) {
    // console.log(book);
    let headers = authHeader();

    return fetch(process.env.REACT_APP_API_URL + `/books/${id}`, {
        method: 'GET',
        headers: headers
    }).then(handleResponse);
}
