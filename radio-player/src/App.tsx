import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Browse from "./pages/browse/Browse";
import Favorite from "./pages/favorites/Favorite";
import RadioMap from "./pages/radio-map/RadioMap";
import AppSider from "./components/AppSider/AppSider";
import MobileDrawer from "./components/MobileDrawer/MobileDrawer";
import FooterPlayer from "./components/FooterPlayer/FooterPlayer";
import RadioPlayer from "./components/RadioPlayer/RadioPlayer";
import Player from "./pages/player/Player";
// import { useDrawer } from "./contexts/DrawerContext";

const App = () => {
  return (
    <div className="relative h-screen w-full">
      <Router>
        <AppNavbar />
        <div className="relative w-full h-screen flex flex-row">
          <div className="min-w-[200px] mt-[70px] hidden lg:block fixed h-screen border-r-[1px] bg-slate-100 dark:bg-darkBackground">
            <AppSider />
          </div>
          <div className="w-full lg:ml-[200px] mt-[70px] mb-[300px]">
            <Routes>
              <Route path="/" Component={Browse} />
              <Route path="/radio-map" Component={RadioMap} />
              <Route path="/favorites" Component={Favorite} />
              <Route path="/player" Component={Player} />
            </Routes>
            <FooterPlayer />
          </div>
        </div>
        <RadioPlayer/>
      </Router>
      <MobileDrawer />
    </div>
  );
};

export default App;
