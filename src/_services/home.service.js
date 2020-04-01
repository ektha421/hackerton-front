import {
    authHeader
} from '../_helpers';

export const homeService = {
    getBanner
};

function getBanner() {
    return fetch(process.env.REACT_APP_API_URL + `/books/main`, {
        method: 'GET',
        headers: authHeader(),
    }).then(handleResponse)
    .then((banner) => {
        return banner;
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

