import { homeConstants } from '../_constants';
import { homeService } from '../_services';
import { history } from '../_helpers';

export const homeActions = {
   getBanner
};


function getBanner() {
    return dispatch => {
        dispatch(request());

        homeService.getBanner().then(
            banner => dispatch(success(banner)),
            error => dispatch(failure(error.toString())),
        );
    };

    function request() {
        return { type: homeConstants.BANNER_REQUEST };
    }
    function success(banner) {
        return { type: homeConstants.BANNER_SUCCESS, banner };
    }
    function failure(error) {
        console.log('actions 에러났어요!!!!');
        return { type: homeConstants.BANNER_FAILURE, error };
    }
}
