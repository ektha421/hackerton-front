import React from 'react';
import '../../scss/SearchResult.scss'

const SearchResultItem = () => {
    return (
        <div className="search-item">
            <ul className="item-wrap">
            <li className="item">
                <div className="book-img"><img src="/images/img_book.jpg" alt=""/></div>
                <div className="book-info">
                    <h3 className="book-title">곰돌이 푸</h3>
                    <h4 className="book-sub">앨런 알렉산더 밀른</h4>
                    <div className="star-box">
                        <span className="star"></span>
                    </div>
                    <p className="book-desc">
                    앨런 알렉산더 밀른은 1920년 아들 크리스토퍼 로빈 밀른이 태어나자 하트필드의 아담한 시골집 코치포드 팜을 사들인다. 그리고 자주 산책을 나갔던 애시다운 포레스트를 무대로 곰돌이 푸의 원작인 《위니 더 푸》와 《푸 모퉁이에 있는 집》을 탄생시켰다. 《위니 더 푸》는 그의 아들 로빈이 가장 좋아했던 봉제 곰 인형과 다른 동물 인형들을 가지고 놀이를 하는 모습에서 영감을 받아 집필을 시작했다고 한다. 푸 이야기는 작가인 아버지가 어린 아들이 실제로 몸담았던 공간에서 아들이 사랑하는 인형들이 펼치는 재미난 모험을 이야기로 들려주는, 선물과도 같은 작품이었다.
                    </p>
                </div>
            </li>
            </ul>
        </div>
    );
};

export default SearchResultItem;