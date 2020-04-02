import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";

const data = [
  {
    id: 1,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이도우",
    thumbnail: "/images/img_book_6.jpg",
    score: 4,
    reviewCnt: 1
  },
  {
    id: 2,
    name: "날씨가 좋으면 찾아가겠",
    author: "이도우",
    thumbnail: "/images/img_book_5.jpg",
    score: 4,
    reviewCnt: 1
  },
  {
    id: 3,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이도우",
    thumbnail: "/images/img_book_3.jpg",
    score: 4,
    reviewCnt: 1
  },
  {
    id: 4,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이도우",
    thumbnail: "/images/img_book_2.jpg",
    score: 4,
    reviewCnt: 1
  },
  {
    id: 5,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이도우",
    thumbnail: "/images/img_book_6.jpg",
    score: 4,
    reviewCnt: 1
  },
  {
    id: 6,
    name: "날씨가 좋으면 찾아가겠",
    author: "이도우",
    thumbnail: "/images/img_book_5.jpg",
    score: 4,
    reviewCnt: 1
  },
  {
    id: 7,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이도우",
    thumbnail: "/images/img_book_3.jpg",
    score: 4,
    reviewCnt: 1
  },
  {
    id: 8,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이도우",
    thumbnail: "/images/img_book_2.jpg",
    score: 4,
    reviewCnt: 1
  }
];

const MyWishList = () => {
  let [isLikeOn, setIsLikeOn] = useState(true);

  const onLike = () => {
    setIsLikeOn(!isLikeOn);
  };

  return (
    <div className="contents">
      <ul id="myWish">
        {data.map(list => (
          <li className="item" key={list.id}>
            <Link to={`/book_detail/${list.id}`}>
              <div className="book-img">
                <img src={list.thumbnail} alt="" />
              </div>
              <h3 className="book-title">{list.name}</h3>
            </Link>
            <h4 className="book-sub">{list.author}</h4>
            <div className="star-box">
              <Rating
                className="star"
                name="read-only"
                value={list.score}
                readOnly
              />
              <span className="review"> {list.reviewCnt}명</span>
              <span className="like">
                <button>
                  <i
                    onClick={onLike}
                    className={isLikeOn ? "icon-heart-filled" : "icon-heart-1"}
                  ></i>
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyWishList;
