import Home from './components/home/Home';
import BookList from './components/booklist/BookList';
import Community from './components/community/Community';
import MyPage from './components/mypage/MyPage';

const routes = [
    { path: '/', name: '홈', component: Home, exact:true },
    { path: '/books', name: '책리스트', component: BookList },
    { path: '/community', name: '커뮤니티', component: Community },
    { path: '/mypage', name: '마이페이지', component: MyPage},
];

export default routes;
