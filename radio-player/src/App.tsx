import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Browse from "./pages/browse/Browse";
import Favorite from "./pages/favorites/Favorite";
import RadioMap from "./pages/radio-map/RadioMap";
import AppSider from "./components/AppSider/AppSider";

const App = () => {
  return (
    <div className="relative h-screen w-full">
      <Router>
        <AppNavbar />
        <div className="relative w-full h-screen flex flex-row">
          <div className="w-[200px] h-screen border-r-[1px] dark:bg-darkBackground">
            <AppSider />
          </div>
          <div>
            <Routes>
              <Route path="/" Component={Browse} />
              <Route path="/radio-map" Component={RadioMap} />
              <Route path="/favorites" Component={Favorite} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
