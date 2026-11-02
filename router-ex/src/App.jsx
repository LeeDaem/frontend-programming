import './App.css';
import {Routes, Route} from 'react-router'
import Home from './pages/Home';
import Users from './pages/Users';
import Articles from './pages/Articles';
import { NavLink } from 'react-router';
import TopNav from './components/TopNav';
import NotFound from './pages/NotFound';
import Info from './pages/Info';
import History from './pages/History';
import ArticlesLayout from './pages/ArticleLayout';
import UserDetail from './pages/UserDetail';
function App() {
  return (
    <>
      <TopNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='users/:userId' element={<UserDetail/>}></Route>
        <Route path='/articles' element={<ArticlesLayout/>}>
          <Route index element={<Articles/>} />
          <Route path='info' element={<Info/>} />
          <Route path='history' element={<History/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
 )
}

export default App;