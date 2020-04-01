import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MyPageHeader from '../components/mypage/MyPageHeader';
import MyProfile from '../components/mypage/MyProfile';
import MyReview from '../components/mypage/MyReview';
import MyWishList from '../components/mypage/MyWishList';
import MyBook from '../components/mypage/MyBook';


const MyPage = () => {
    return (
     
            <div className="contents">
                <div id="myPage">
                    <MyPageHeader/>
                    <Switch>
                        <div id="content">
                            <Route path="/profile" name="프로필" component={MyProfile} exact/> 
                            <Route path="/my_review" name="내 리뷰" component={MyReview} /> 
                            <Route path="/my_wish" name="위시리스트" component={MyWishList} /> 
                            <Route path="/my_book" name="내 책" component={MyBook} /> 
                        </div>
                    </Switch>
                </div>
            </div>
     
    );
}

export default MyPage;
