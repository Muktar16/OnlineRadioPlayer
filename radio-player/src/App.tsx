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
          <div className="min-w-[200px] mt-[70px] fixed h-screen border-r-[1px] bg-slate-100 dark:bg-darkBackground">
            <AppSider />
          </div>
          <div className="relative ml-[200px] mt-[70px] mb-[20px]">
            <Routes>
              <Route path="/" Component={Browse} />
              <Route path="/radio-map" Component={RadioMap} />
              <Route path="/favorites" Component={Favorite} />
            </Routes>
            <div className="fixed w-full bg-primary h-[60px] bottom-0"></div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
