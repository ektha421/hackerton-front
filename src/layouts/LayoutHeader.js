import React from 'react';
import { NavLink } from 'react-router-dom';

const LayoutHeader = () => {
    return (
        <header id="header">
        <div className="inner">
            <div className="header-top clearfix">
                <h1 className="header-logo">
                    <a href="/">
                        DJBOOKS
                    </a>
                </h1>
                <div className="header-search">
                    <div className="input-box">
                    <i className="icon-search"></i>
                    <input type="text" placeholder="제목, 저자, 출판사 검색"/>
                    </div>
                </div>
                <div className="header-btn">
                    <NavLink to="/login" className="login">로그인</NavLink> 
                </div>
            </div>
            <div className="header-bottom">
                <nav className="menu">
                    <NavLink
                    to="/"
                    className="link"
                    activeClassName="active"
                >
                    <span>
                        <i className="icon-home"></i>HOME
                    </span>
                    </NavLink>
                    <NavLink
                        to="/allbooks"
                        className="link"
                        activeClassName="active"
                    >
                        <span>
                            <i className="icon-book-open"></i>BOOKS
                        </span>
                    </NavLink>
                    <NavLink
                        to="/community"
                        className="link"
                        activeClassName="active"
                    >
                        <span>
                            <i className="icon-users"></i>COMMUNITY
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
            </div>
            </div>
        </header>
    );
};

export default LayoutHeader;
