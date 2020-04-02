import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

const list = [
  {
    id: 1,
    name: "날씨가 좋으면 찾아가겠어요.",
    score: "4",
    create: "2020.04.02",
    description: "시간가는 줄 모르고 재밌게 봤어요. 두번보세요 세번보세요"
  },
  {
    id: 2,
    name: "날씨가 좋으면 찾아가겠어요.",
    score: "2",
    create: "2020.04.02",
    description: "재미없어요"
  },
  {
    id: 3,
    name: "날씨가 좋으면 찾아가겠어요.",
    score: "3",
    create: "2020.04.02",
    description: "괜찮음"
  }
];

const MyReview = () => {
  return (
    <div className="contents">
      <div id="myReview">
        <p className="count">
          총 <span>1</span>개의 리뷰를 등록하셨습니다.
        </p>
        {/* 리뷰누르면 책상세페이지로 이동 */}
        <ul className="review-list">
          {list.map(item => (
            <li className="item" key={item.id}>
              <Link to={`/book_detail/${item.id}`}>
                <h3 className="name">{item.name}</h3>
                <div className="star-box">
                  <Rating name="read-only" value={item.score} readOnly />
                  <span className="create">{item.create}</span>
                </div>
                <p className="desc">{item.description}</p>
              </Link>
              <div className="btn-wrap">
                <button className="delete">삭제</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyReview;
