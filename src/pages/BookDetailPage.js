import React from 'react';
import BookDetailContainer from '../containers/BookDetailContainer';

function BookDetailPage( {match}) {
    return (
      <BookDetailContainer params={match.params}/>
    );
}

export default BookDetailPage;