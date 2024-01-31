import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContexts.tsx";
import { DrawerProvider } from "./contexts/DrawerContext.tsx";
import { PlayerProvider } from "./contexts/PlayerContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <PlayerProvider>
        <DrawerProvider>
          <App />
        </DrawerProvider>
      </PlayerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
