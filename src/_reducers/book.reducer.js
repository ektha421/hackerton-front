import {
  bookConstants
} from '../_constants';

const initialState = {
  name: '',
  thumnail: '',
  author: '',
  publisher: '',
  content: '',
  reviewCnt: 0,
  reviewScroe: 0,
  viewCnt: 0,
  reviews: [],
};

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
    case bookConstants.BOOK_ADD_REQUEST:
      return {
        loading: true,
      };
    case bookConstants.BOOK_ADD_SUCCESS:
      return {
        info: action.book,
      };
    case bookConstants.BOOK_ADD_FAILURE:
      return {
        error: action.error
      };
    case bookConstants.BOOK_GET_REQUEST:
      return {
        loading: true,
        name: '',
        thumnail: '',
        author: '',
        publisher: '',
        content: '',
        reviewCnt: 0,
        reviewScroe: 0,
        viewCnt: 0,
        reviews: [],
      };
    case bookConstants.BOOK_GET_SUCCESS:
      return {
        name: action.book.name,
          thumbnail: action.book.thumbnail,
          author: action.book.author,
          publisher: action.book.publisher,
          content: action.book.content,
          reviewCnt: action.book.reviewCnt,
          reviewScroe: action.book.reviewScroe,
          viewCnt: action.book.viewCnt,
          reviews: action.book.reviews,
      };
    case bookConstants.BOOK_GET_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}