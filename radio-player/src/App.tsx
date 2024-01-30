import {
  Route,
  Link,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Browse from './pages/browse/Browse';
import Favorite from './pages/favorites/Favorite';


const App = () => {
  
  return (
    <div className='h-screen w-full bg-white dark:bg-slate-500'>
      <AppNavbar />
    <Router>
      <nav>
        <Link to="/" className='bg-[#c2aeae] dark:bg-[yellow]'>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route exact path="/" component={Browse} />
        <Route path="/favorites" component={Favorite} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
