import { bookConstants } from '../_constants';
import { bookService } from '../_services';
import { history } from '../_helpers';

export const bookActions = {
    uploadThumnail
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

function addBook(){

}


function getBanner() {
    return dispatch => {
        dispatch(request());

        bookService.getBanner().then(
            banner => dispatch(success(banner)),
            error => dispatch(failure(error.toString())),
        );
    };

    function request() {
        return { type: bookConstants.BANNER_REQUEST };
    }
    function success(banner) {
        return { type: bookConstants.BANNER_SUCCESS, banner };
    }
    function failure(error) {
        return { type: bookConstants.BANNER_FAILURE, error };
    }
}
