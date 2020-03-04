import Home from './pages/Home';
import BookList from './pages/BookList';
import AddList from './pages/AddList';
import MyPage from './pages/MyPage';
import SearchResult from './pages/SearchResult';

const routes = [
    { path: '/', name: '홈', component: Home, exact: true },
    { path: '/books', name: '책리스트', component: BookList },
    { path: '/addlist', name: '책등록', component: AddList },
    { path: '/mypage', name: '마이페이지', component: MyPage },
    { path: '/search', name: '검색결과', component: SearchResult },
];

export default routes;
