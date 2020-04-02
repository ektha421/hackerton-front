import React from "react";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";

const data = [
  {
    id: 1,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이다솜",
    create: "2020.04.02",
    thumbnail: "/images/img_book_6.jpg"
  },
  {
    id: 2,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이다솜",
    create: "2020.04.02",
    thumbnail: "/images/img_book_5.jpg"
  },
  {
    id: 3,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이다솜",
    create: "2020.04.02",
    thumbnail: "/images/img_book_3.jpg"
  },
  {
    id: 4,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이다솜",
    create: "2020.04.02",
    thumbnail: "/images/img_book_2.jpg"
  },
  {
    id: 5,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이다솜",
    create: "2020.04.02",
    thumbnail: "/images/img_book_6.jpg"
  },
  {
    id: 6,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이다솜",
    create: "2020.04.02",
    thumbnail: "/images/img_book_5.jpg"
  },
  {
    id: 7,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이다솜",
    create: "2020.04.02",
    thumbnail: "/images/img_book_3.jpg"
  },
  {
    id: 8,
    name: "날씨가 좋으면 찾아가겠어요.",
    author: "이다솜",
    create: "2020.04.02",
    thumbnail: "/images/img_book_2.jpg"
  }
];

const MyBook = () => {
  return (
    <div className="contents">
      <ul id="myBook">
        {data.map(list => (
          <li className="item" key={list.id}>
            <Link to={`/book_detail/${list.id}`}>
              <div className="book-img">
                <img src={list.thumbnail} alt="" />
              </div>
              <h3 className="book-title">{list.name}</h3>
            </Link>
            <h4 className="book-sub">{list.author}</h4>
            <h5 className="create">{list.create}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBook;
