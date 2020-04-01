import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import BookListItem from "../components/BookListItem";

const BookListPage = () => {
  let [data, setData] = useState([]);
  let [view, setView] = useState({});
  let limit = 12;
  let page = 1;

  const getAll = useCallback(
    page => {
      axios
        .get(process.env.REACT_APP_API_URL + "/books", {
          params: {
            page: page,
            limit: limit
          }
        })
        .then(res => {
          setData(res.data.rows);
          setView(res.data);
        });
    },
    [limit]
  );

  useEffect(() => {
    getAll();
  }, [getAll, limit, page]);

  return (
    <div className="contents">
      <BookListItem
        data={data}
        view={view}
        limit={limit}
        page={page}
        getAll={getAll}
      />
    </div>
  );
};

export default BookListPage;
