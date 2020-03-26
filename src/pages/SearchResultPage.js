import React from 'react';
import SearchResultItem from '../components/SearchResultItem';

const SearchResultPage = () => {
    return (
        <div className="contents" style={{ width: '1024px' }}>
            <div id="searchResult">
                <h3 className="result-title">
                    <span>'곰돌이푸'</span> 도서 검색 결과 (1)
                </h3>
                <div className="sort-box">
                    <span>인기순</span>
                    <span>최신순</span>
                    <span>평점순</span>
                    <span>리뷰 많은순</span>
                </div>
                <SearchResultItem />
            </div>
        </div>
    );
};

export default SearchResultPage;
