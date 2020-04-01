import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const MyPageHeader = () => {
    return (
        <>
        <h2 className="title">마이페이지</h2>
        <nav className="menu">
            <NavLink to="/profile" activeClassName="active" className="active" exact>프로필</NavLink>
            <NavLink to="/my_review" activeClassName="active">내가 올린 리뷰</NavLink>
            <NavLink to="/my_book" activeClassName="active">내가 올린 책</NavLink>
            <NavLink to="/my_wish" activeClassName="active">위시리스트</NavLink>
        </nav>
        </>
    );
};

export default MyPageHeader;