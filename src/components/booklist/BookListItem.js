import React, { useState } from 'react';

const BookListItem = () => {
    const initialValue = [
        {
            id:1,
            bImg:'/images/img_book.jpg',
            bName:'나를 찾아줘요',
            bAuthor:'클레어 버더',
        },
        {
            id:2,
            bImg:'/images/img_book.jpg',
            bName:'예술하는 습관',
            bAuthor:'메이슨 커리',
        },
        {
            id:3,
            bImg:'/images/img_book.jpg',
            bName:'피프티 피플',
            bAuthor:'정세랑',
        },
        {
            id:4,
            bImg:'/images/img_book.jpg',
            bName:'인간 관계의 법칙',
            bAuthor:'로버트 그린',
        },
        {
            id:5,
            bImg:'/images/img_book.jpg',
            bName:'일의 기쁨과 슬픔',
            bAuthor:'장류진',
        },
        {
            id:6,
            bImg:'/images/img_book.jpg',
            bName:'살인자의 사랑법',
            bAuthor:'마이크 오머',
        },
        {
            id:7,
            bImg:'/images/img_book.jpg',
            bName:'나를 찾아줘요',
            bAuthor:'클레어 버더',
        },
        {
            id:8,
            bImg:'/images/img_book.jpg',
            bName:'예술하는 습관',
            bAuthor:'메이슨 커리',
        },
        {
            id:9,
            bImg:'/images/img_book.jpg',
            bName:'피프티 피플',
            bAuthor:'정세랑',
        },
        {
            id:10,
            bImg:'/images/img_book.jpg',
            bName:'인간 관계의 법칙',
            bAuthor:'로버트 그린',
        },
        {
            id:11,
            bImg:'/images/img_book.jpg',
            bName:'일의 기쁨과 슬픔',
            bAuthor:'장류진',
        },
        {
            id:12,
            bImg:'/images/img_book.jpg',
            bName:'살인자의 사랑법',
            bAuthor:'마이크 오머',
        },
    ]
    const [stateList, setStateList] = useState(initialValue);

    return (
        <div className="list-item">
            <h2 className="title">전체목록 <i className="icon-right-open"></i></h2>
            <ul className="item-wrap clearfix">
            {stateList.map((list, index) => (
                    <li className="item" key={index}>
                    <div className="book-img">
                        <img src={list.bImg} alt=""/>
                    </div>
                    <h3 className="book-title">{list.bName}</h3>
                    <h4 className="book-sub">{list.bAuthor}</h4>
                    <div className="star-box">
                        <span className="star"></span>
                    </div>
                </li>
            ))}                
            </ul>
        </div>
    );
};

export default BookListItem;