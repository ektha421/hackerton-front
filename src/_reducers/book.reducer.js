import { bookConstants} from '../_constants';

const initialState = { name : '', thumnail : '',  author : '',publisher : '', content : '' };

export function book(state = initialState, action) {
  switch (action.type) {
    case bookConstants.IMG_ADD_REQUEST:
      return {
        loading: true,
      };
    case bookConstants.IMG_ADD_SUCCESS:
      return {
        thumbnail: action.location,
      };
    case bookConstants.IMG_ADD_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}