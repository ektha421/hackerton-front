import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = ({
    newBookList,
    hightScoreBookList,
    manyReviewBookList,
    getBanner
}) => {
    // const [value, setValue] = useState(2);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1400 },
            items: 4,
            slidesToSlide: 1,
        },
    };
    const responsiveNew = {
        desktop: {
            breakpoint: { max: 3000, min: 1100 },
            items: 6,
            slidesToSlide: 6,
        },
    };

    return (
        <div id="main">
            <div className="banner-wrap">
                {( hightScoreBookList.length > 0) && 
                <Carousel
                    swipeable={true}
                    draggable={false}
                    responsive={responsive}
                    ssr={true}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                    itemClass="carousel-item-padding-40-px"
                >
                { hightScoreBookList.map((book)=>(
                    <Link to={`/book_detail/${book.id}`} key={book.id}>
                    <div className="banner" >
                        <img
                            src={book.thumbnail}
                            alt="비행청소년에서 억만장자 CEO로 성공한 비결"
                        />
                    </div>
                    </Link>
                ))}
                </Carousel>
                }
            </div>
            <div className="new-book-wrap">
                <div className="contents">
                    <h2 className="title">
                        <Link to="/books?sort=createdAt">
                            이달의 신작<i className="icon-right-open-big"></i>
                        </Link>
                    </h2>
                    { newBookList.length > 0 &&
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        responsive={responsiveNew}
                        ssr={true}
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        itemClass="carousel-item-padding-40-px"
                    >
                        { newBookList.map((book)=>(
                            <div className="banner" key={book.id}>
                            <Link to={`/book_detail/${book.id}`}>
                            <div className="img">
                                <img
                                    src={book.thumbnail}
                                    alt={book.id}
                                />
                            </div>
                            <h3 className="name">{book.name}</h3>
                            <h4 className="author">{book.author}</h4>
                            </Link>
                            </div>
                        ))}                       
                    </Carousel>
                    }
                </div>
            </div>
            <div className="best-book-wrap">
                <div className="contents">
                    <h2 className="title">
                        <Link to="/">
                            Best Score<i className="icon-right-open-big"></i>
                        </Link>
                    </h2>
                    <div className="book-list">
                        <div className="item-box">
                            { manyReviewBookList.length > 0 &&
                                manyReviewBookList.map((book,index)=>(
                                    <Link to={`/book_detail/${book.id}`} key={book.id}>
                                    <div className="item">
                                        <div className="img">
                                            <span className="rank">{index+1}</span>
                                            <img
                                                src={book.thumbnail}
                                                alt="book_1"
                                            />
                                        </div>
                                        <div className="txt-box">
                                            <h3 className="name">
                                                {book.name}
                                            </h3>
                                            <h4 className="author">{book.author}</h4>
                                            <Rating
                                                name="read-only"
                                                precision={0.5}
                                                value={book.reviewScore}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    </Link>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
