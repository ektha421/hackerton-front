import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MyPageHeader from "../components/mypage/MyPageHeader";
import MyProfile from "../components/mypage/MyProfile";
import MyReview from "../components/mypage/MyReview";
import MyWishList from "../components/mypage/MyWishList";
import MyBook from "../components/mypage/MyBook";

const MyPage = () => {
  return (
    <BrowserRouter>
      <div className="contents">
        <div id="myPage">
          <MyPageHeader />
          <Switch>
            <Route path="/profile" name="프로필" component={MyProfile} exact />
            <Route
              path="/my_review"
              name="내가 올린 리뷰"
              component={MyReview}
            />
            <Route path="/my_wish" name="위시리스트" component={MyWishList} />
            <Route path="/my_book" name="내가 올린 책" component={MyBook} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default MyPage;
