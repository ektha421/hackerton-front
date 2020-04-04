
import React from 'react';
import BookDetailContainer from '../containers/BookDetailContainer';

function BookDetailPage( {match: { params }}) {
    return (
      <BookDetailContainer params={params}/>
    );
}

export default BookDetailPage;