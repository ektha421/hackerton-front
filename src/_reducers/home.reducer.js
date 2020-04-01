import { homeConstants} from '../_constants';

const initialState = { newBookList: [], hightScoreBookList:[], manyReviewBookList : [] };

export function home(state = initialState, action) {
  switch (action.type) {
    case homeConstants.BANNER_REQUEST:
      return {
        loading: true,
          newBookList: [],
          hightScoreBookList: [],
          manyReviewBookList: []
      };
    case homeConstants.BANNER_SUCCESS:
      return {
        newBookList: action.banner.newBookList,
          hightScoreBookList: action.banner.hightScoreBookList,
          manyReviewBookList: action.banner.manyReviewBookList
      };
    case homeConstants.BANNER_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}