import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContexts.tsx";
import { DrawerProvider } from "./contexts/DrawerContext.tsx";
import { PlayerProvider } from "./contexts/PlayerContext.tsx";
import { FavoriteStationProvider } from "./contexts/FavoriteStationsContext.tsx";
import ToastComponent from "./components/ToastComponent/ToastComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <FavoriteStationProvider>
        <PlayerProvider>
          <DrawerProvider>
          <ToastComponent />
            <App />
          </DrawerProvider>
        </PlayerProvider>
      </FavoriteStationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
