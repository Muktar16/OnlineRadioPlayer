import {
  BrowserRouter as Router,
  Routes,
  // Route,
  Link,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} /> */}
      </Routes>
    </Router>
  );
}

export default App;
