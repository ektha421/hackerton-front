
import React from 'react';

const AddBook = ({
        name,
        content,
        thumbnail,
        author,
        publisher,
        onChangeFile,
        onChange,
        onSubmit,
    }) => {
    return (
        <div className="contents">
            <div id="AddList">
                <div className="add-wrap">
                    <h1 className="title">Add Books</h1>
                    <div className="add-form-wrap">
                        <form onSubmit={onSubmit}>
                            {/* 
                            <span className="input-area">
                                <select name="category" id="category">
                                    <option value="category_d">
                                        카테고리를 선택해주세요.
                                    </option>
                                    <option value="category_1">소설</option>
                                    <option value="category_2">로맨스</option>
                                    <option value="category_3">기타</option>
                                </select>
                                <i className="icon-down-open"></i>
                            </span>
                        */}
                            <span className="input-area">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="책 이름"
                                    onChange={onChange}
                                />
                            </span>
                            { thumbnail &&
                            <span className="input-area upload-preview">
                            <em className="preview">미리보기</em>
                              <strong className="upload-img">
                                <img src={thumbnail}
                                alt=""/>
                              </strong>
                            </span>
                            }
                            <span className="input-area upload">
                                <input type="file" id="image" name="image"
                                onChange={onChangeFile} />
                            </span>
                            <span className="input-area">
                                <input
                                    type="text"
                                    id="author"
                                    name="author"
                                    placeholder="저자"
                                    onChange={onChange}
                                />
                            </span>
                            <span className="input-area">
                                <input
                                    type="text"
                                    id="publisher"
                                    name="publisher"
                                    value={publisher}
                                    placeholder="출판사"
                                    onChange={onChange}
                                />
                            </span>
                            <textarea
                                name="description"
                                id="description"
                                cols="30"
                                rows="8"
                                name="content"
                                onChange={onChange}
                                placeholder="책 소개"
                            ></textarea>
                            <button className="btn-signup" onClick={onSubmit}>등록하기</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;
