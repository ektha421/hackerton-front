import HomePage from "./pages/HomePage";
import BookListPage from "./pages/BookListPage";
import MyPage from "./pages/MyPage";
import SearchResultPage from "./pages/SearchResultPage";
import AddBookPage from "./pages/AddBookPage";

const routes = [
  { path: "/", name: "홈", component: HomePage, exact: true },
  { path: "/home", name: "홈", component: HomePage },
  { path: "/books", name: "책리스트", component: BookListPage },
  { path: "/addlist", name: "책등록", component: AddBookPage },
  { path: "/search/:searchVal", name: "검색결과", component: SearchResultPage },
  { path: "/profile", name: "프로필", component: MyPage },
  { path: "/my_review", name: "내 리뷰", component: MyPage },
  { path: "/my_wish", name: "위시리스트", component: MyPage },
  { path: "/my_book", name: "내 책", component: MyPage }
];

export default routes;
