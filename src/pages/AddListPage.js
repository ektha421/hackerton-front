import React, { useState, useCallback } from "react";

const AddListPage = () => {
  let [list, setList] = useState({
    name: "",
    content: "",
    thumbnail: "",
    author: "",
    publisher: ""
  });

  const addList = useCallback(list => {
    return fetch(process.env.REACT_APP_API_URL + `/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(list)
    }).then(res => {
      console.log(res);
      setList(res.data.info);
    });
  }, []);

  const onChange = e => {
    const { name, value } = e.target;
    setList(list => ({ ...list, [name]: value }));
  };

  const onSubmit = data => {
    console.log(data);
    addList(data);
  };

  return (
    <div className="contents">
      <div id="AddList">
        <div className="add-wrap">
          <h1 className="title">Add Books</h1>
          <div className="add-form-wrap">
            <form name="form" onSubmit={onSubmit}>
              <span className="input-area">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={list.name}
                  onChange={onChange}
                  placeholder="책 이름"
                />
              </span>
              <span className="input-area upload">
                <input
                  type="file"
                  id="image"
                  name="thumbnail"
                  value={list.thumbnail}
                  onChange={onChange}
                />
              </span>
              <span className="input-area">
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={list.author}
                  onChange={onChange}
                  placeholder="저자"
                />
              </span>
              <span className="input-area">
                <input
                  type="text"
                  id="publisher"
                  name="publisher"
                  value={list.publisher}
                  onChange={onChange}
                  placeholder="출판사"
                />
              </span>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="8"
                name="content"
                value={list.content}
                onChange={onChange}
                placeholder="책 소개"
              ></textarea>
              <button type="submit" className="btn-signup" onSubmit={onSubmit}>
                등록하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListPage;
