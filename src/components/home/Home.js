import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../scss/Home.scss';

const Home = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1, 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, 
        },
    };
    const responsiveNew = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 6, 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, 
        },
    };

    return (
        <div id="main">
            <div className="banner-wrap">
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
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="banner"><img src="/images/banner_1.jpg" alt="비행청소년에서 억만장자 CEO로 성공한 비결"/></div>
                    <div className="banner"><img src="/images/banner_2.jpg" alt="공부, 이래도 안되면 포기하세요!"/></div>
                    <div className="banner"><img src="/images/banner_3.jpg" alt="콜미 바이 유어 네임 후속작 출간!"/></div>
                    <div className="banner"><img src="/images/banner_4.jpg" alt="김영사 편집자 추천 분야별 필독서"/></div>
                    <div className="banner"><img src="/images/banner_5.jpg" alt="반값 대여에 5,000 포인트백까지!"/></div>
                </Carousel>
            </div>
            <div className="new-book-wrap">
                <div className="contents">
                <h2 className="title">이달의 신작!</h2>
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
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div className="banner">
                            <img src="/images/img_book_1.jpg" alt="book_1"/>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                        <div className="banner"><img src="/images/img_book_2.jpg" alt="book_2"/>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                        <div className="banner"><img src="/images/img_book_3.jpg" alt="book_3"/>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                        <div className="banner"><img src="/images/img_book_4.jpg" alt="book_4"/>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                        <div className="banner"><img src="/images/img_book_5.jpg" alt="book_5"/>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                        <div className="banner"><img src="/images/img_book_6.jpg" alt="book_6"/>
                            <h3 className="name">울트라러닝</h3>
                            <h4 className="author">스콧영</h4>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="contents">
                
            </div>
        </div>
    );
};

export default Home;