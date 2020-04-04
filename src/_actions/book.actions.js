import { bookConstants } from '../_constants';
import { bookService } from '../_services';
import { history } from '../_helpers';

export const bookActions = {
    uploadThumnail,
    addBook,
    getBookInfo,
    addReview
};


function uploadThumnail(file ){
    return dispatch => {
        dispatch(request());

        bookService.uploadThumnail(file).then(
            location => dispatch(success(location)),
            error => dispatch(failure(error.toString())),
        );
    };

    function request() {
        return { type: bookConstants.IMG_ADD_REQUEST };
    }
    function success(location) {
        return { type: bookConstants.IMG_ADD_SUCCESS, location };
    }
    function failure(error) {
        return { type: bookConstants.IMG_ADD_FAILURE, error };
    }
}

function addBook(book){
    return dispatch => {
        dispatch(request());

        bookService.addBook(book).then(
            book => {
                dispatch(success(book));
                alert(book.name +'이 등록되었습니다');
                history.push('/home');
            },
            error => dispatch(failure(error.toString())),
        );
    };

    function request() {
        return { type: bookConstants.BOOK_ADD_REQUEST };
    }
    function success(book) {
        return { type: bookConstants.BOOK_ADD_SUCCESS, book };
    }
    function failure(error) {
        return { type: bookConstants.BOOK_ADD_FAILURE, error };
    }
}


function getBookInfo(id){
    return dispatch => {
        // dispatch(request());

        bookService.getBookInfo(id).then(
            ({info ,reviews}) => {
                info.reviews = reviews;
                dispatch(success(info));
            },
            error => dispatch(failure(error.toString())),
        );
    };

    function request() {
        return { type: bookConstants.BOOK_GET_REQUEST };
    }
    function success(book , reviews) {
        return { type: bookConstants.BOOK_GET_SUCCESS, book };
    }
    function failure(error) {
        return { type: bookConstants.BOOK_GET_FAILURE, error };
    }
}

function addReview(review){
    return dispatch => {
        dispatch(request());

        bookService.addReview(review).then(
            (review) => {
                dispatch(success(review));
                history.go(0);
                // history.replace()
            },
            error => console.log(error),
        );
    };

    function request() {
        return { type: bookConstants.REVIEW_ADD_REQUEST };
    }
    function success(review ) {
        return { type: bookConstants.REVIEW_ADD_SUCCESS, review };
    }
    function failure(error) {
        return { type: bookConstants.REVIEW_ADD_FAILURE, error };
    }
}