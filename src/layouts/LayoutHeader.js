import React from 'react';
import { NavLink } from 'react-router-dom';

const LayoutHeader = ({ logged, onLogout }) => {
    return (
        <header id="header">
            <div className="inner">
                <div className="header-top clearfix">
                    <h1 className="header-logo">
                        <a href="/">DJBOOKS</a>
                    </h1>
                    <div className="header-btn">
                        {logged ? (
                            <span className="login">이름</span>
                        ) : (
                            <NavLink to="/login" className="login">
                                로그인
                            </NavLink>
                        )}
                        {logged ? (
                            <NavLink
                                to="/"
                                className="login"
                                onClick={onLogout}
                            >
                                로그아웃
                            </NavLink>
                        ) : (
                            <NavLink to="/signup" className="signup">
                                회원가입
                            </NavLink>
                        )}
                    </div>
                </div>
                <div className="header-bottom clearfix">
                    <nav className="menu">
                        <NavLink
                            to="/home"
                            className="link"
                            activeClassName="active"
                        >
                            <span>
                                <i className="icon-home"></i>HOME
                            </span>
                        </NavLink>
                        <NavLink
                            to="/books"
                            className="link"
                            activeClassName="active"
                        >
                            <span>
                                <i className="icon-book-open"></i>BOOKS
                            </span>
                        </NavLink>
                        <NavLink
                            to="/addlist"
                            className="link"
                            activeClassName="active"
                        >
                            <span>
                                <i className="icon-list-add"></i>ADD
                            </span>
                        </NavLink>
                        <NavLink
                            to="/mypage"
                            className="link"
                            activeClassName="active"
                        >
                            <span>
                                <i className="icon-user-circle-o"></i>MYDJ
                            </span>
                        </NavLink>
                    </nav>
                    <div className="header-search">
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="제목, 저자, 출판사 검색"
                            />
                            <button type="submit" className="btn-search">
                                <i className="icon-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default LayoutHeader;
