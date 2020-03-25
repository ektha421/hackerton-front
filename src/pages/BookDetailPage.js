import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';

const BookDetailPage = () => {
    const [value, setValue] = useState(2);
    return (
        <div className="contents">
            <div id="bookDetail">
                <div className="book-info">
                    <div className="img-box">
                        <img src="/images/img_book_6.jpg" alt="" />
                    </div>
                    <div className="txt-box">
                        <h2 className="book-title">곰돌이 푸</h2>
                        <h3 className="book-sub">앨런 알렉산더 밀른</h3>
                        <dl className="clearfix">
                            <dt>저자</dt>
                            <dd>이도우</dd>
                        </dl>
                        <dl className="clearfix">
                            <dt>출판사</dt>
                            <dd>시공사</dd>
                        </dl>
                        <div className="star-box">
                            <Rating name="read-only" value={3} readOnly />
                            <span className="review">/ 10명</span>
                        </div>
                    </div>
                </div>
                <div className="desc-box">
                    <h4 className="detail-title">책 소개</h4>
                    <p className="desc">
                        미대입시학원에서 그림을 가르치던 해원은 학생과의 불화를
                        계기로 일을 그만두고 펜션을 운영하는 이모 곁에서 한동안
                        지내기로 한다. 열다섯 살 그 일 이후로 사람에게 기대한
                        적이 없었던 해원은 언젠가부터 사람을 그리는 것이 싫어
                        인물화를 그리지 않는다. 한편 노부부가 살던 낡은 기와집을
                        작은 서점 굿나잇책방으로 바꾸어 운영하고 있는 은섭은
                        자신의 서점을 기웃거리는 해원을 보고 놀란다. 삼 년 전
                        은섭에게 겨울 들판에 뒹구는 ‘마시멜로’의 진짜 이름이
                        뭐냐고 묻던 이웃집 그녀다. 큰아버지의 스케이트장 일을
                        돕기 위해 서점을 비운 지금 그는 해원 앞으로
                        순간이동이라도 하고 싶다.
                    </p>
                </div>
                <div className="review-wrap">
                    <h4 className="detail-title">리뷰</h4>
                    <form className="score-wrap">
                        <h4 className="title">이 책의 점수는요?</h4>
                        <div className="star-box">
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                        <div className="review-add">
                            <textarea placeholder="리뷰를 작성해주세요." />
                            <button type="submit">리뷰등록</button>
                        </div>
                    </form>
                    <div className="review-list-wrap">
                        <ul className="list-wrap">
                            <li className="list">
                                <div className="content-left">
                                    <div className="star-box">
                                        <Rating
                                            className="star"
                                            name="read-only"
                                            value={3}
                                            readOnly
                                        />
                                    </div>
                                    <p classname="name">ektha421</p>
                                    <p className="date">2020.03.24</p>
                                </div>
                                <div className="content-right">
                                    <p>
                                        잔잔한글좋아하는제겐좋았네요.
                                        <br />
                                        사는게이런거겠거니...
                                        <br />
                                        마음이몽글몽글해요.
                                        <br />
                                    </p>
                                    <div className="btn-wrap">
                                        <button>
                                            <i className="icon-thumbs-up"></i>
                                            <span>0</span>
                                        </button>
                                        <button>
                                            <i className="icon-thumbs-down"></i>
                                            <span>0</span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="list">
                                <div className="content-left">
                                    <div className="star-box">
                                        <Rating
                                            className="star"
                                            name="read-only"
                                            value={3}
                                            readOnly
                                        />
                                    </div>
                                    <p classname="name">ektha421</p>
                                    <p className="date">2020.03.24</p>
                                </div>
                                <div className="content-right">
                                    <p>잔잔한글좋아하는제겐좋았네요.</p>
                                    <div className="btn-wrap">
                                        <button>
                                            <i className="icon-thumbs-up"></i>
                                            <span>0</span>
                                        </button>
                                        <button>
                                            <i className="icon-thumbs-down"></i>
                                            <span>0</span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;
