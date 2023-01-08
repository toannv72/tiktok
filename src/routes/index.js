//import layout
import { HederOnly } from "../components/GlobalStyles/Layuot";


import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Upload from "../pages/Upload" 
// public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Following", component: Following },
  { path: "/Profile", component: Profile },
  { path: "/upload", component: Upload, Layuot: HederOnly },
  { path: "/search", component: Search, Layuot: null },
];


const privateRoutes = [];
export { publicRoutes, privateRoutes }; 