export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    var myHeaders = new Headers();
    if (user && user.token) {
        myHeaders.append("Authorization", 'Bearer ' + user.token);
        return myHeaders;
    } else {
        return {};
    }
}