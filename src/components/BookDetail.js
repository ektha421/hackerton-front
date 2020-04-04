import React, { useState, useEffect, useCallback } from 'react';
import Rating from '@material-ui/lab/Rating';

const BookDetail = ({ info, star, onChangeStar, onChange, onSubmit}) => {
    console.log('info',info);
    return (
        <div className="contents">
            <div id="bookDetail">
                <div className="book-info">
                    <div className="img-box">
                        <img src={info.thumbnail} alt="" />
                    </div>
                    <div className="txt-box">
                        <h2 className="book-title">{info.name}</h2>
                        <dl className="clearfix">
                            <dt>저자</dt>
                            <dd>{info.author}</dd>
                        </dl>
                        <dl className="clearfix">
                            <dt>출판사</dt>
                            <dd>{info.publisher}</dd>
                        </dl>
                        <div className="star-box">
                            <Rating name="read-only" 
                            precision={0.5}
                            defaultValue={info.reviewScore} />
                            <span className="review">/ {info.reviewCnt}명</span>
                        </div>
                    </div>
                </div>
                <div className="desc-box">
                    <h4 className="detail-title">책 소개</h4>
                    <p className="desc">
                       {info.content}
                    </p>
                </div>
                <div className="review-wrap">
                    <h4 className="detail-title">리뷰</h4>
                    <form className="score-wrap" onSubmit={onSubmit}>
                        <h4 className="title">이 책의 점수는요?</h4>
                        <div className="star-box">
                            <Rating
                                name="simple-controlled"
                                value={star}
                                precision={0.5}
                                onChange={onChangeStar}
                            />
                        </div>
                        <div className="review-add">
                            <textarea placeholder="리뷰를 작성해주세요." onChange={onChange} />
                            <button type="submit" onClick={onSubmit} >리뷰등록</button>
                        </div>
                    </form>
                    <div className="review-list-wrap">
                        <ul className="list-wrap">
                        {info.reviews.map(review => (
                            <li className="list" key={review.id}>
                                <div className="content-left">
                                    <div className="star-box">
                                        <Rating
                                            className="star"
                                            name="read-only"
                                            value={review.score}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </div>
                                    <p className="name">{review.user.name}</p>
                                    <p className="date">{review.createdAt}</p>
                                </div>
                                <div className="content-right">
                                    <p>
                                       {review.content}
                                    </p>
                                    {/* <div className="btn-wrap">
                                        <button>
                                            <i className="icon-thumbs-up"></i>
                                            <span>0</span>
                                        </button>
                                        <button>
                                            <i className="icon-thumbs-down"></i>
                                            <span>0</span>
                                        </button>
                                    </div> */}
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
