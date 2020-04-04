import { bookConstants } from '../_constants';
import { bookService } from '../_services';
import { history } from '../_helpers';

export const bookActions = {
    uploadThumnail,
    addBook
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
        dispatch(request());

        bookService.getBookInfo(id).then(
            book => {
                dispatch(success(book));
                // alert(book.name +'이 등록되었습니다');
                // history.push('/home');
            },
            error => dispatch(failure(error.toString())),
        );
    };

    function request() {
        return { type: bookConstants.BOOK_ADD_REQUEST };
    }
    function success(book,comme) {
        return { type: bookConstants.BOOK_ADD_SUCCESS, book };
    }
    function failure(error) {
        return { type: bookConstants.BOOK_ADD_FAILURE, error };
    }
}