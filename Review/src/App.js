import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { SearchBarProvider } from "./contexts/SearchBarContext";
import TrendVideosPage from "./pages/TrendVideosPage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";
import { WatchLaterProvider } from "./contexts/WatchLaterContext";
import WatchLaterPage from "./pages/WatchLaterPage";
import SelectedVideoPage from "./pages/SelectedVideoPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchBarProvider>
        <WatchLaterProvider>
          <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trends" element={<TrendVideosPage />} />
                <Route
                  path="/watch-video/:id"
                  element={<SelectedVideoPage />}
                />
                <Route path="/library" element={<WatchLaterPage />} />
              </Routes>
            </Router>
          </div>
        </WatchLaterProvider>
      </SearchBarProvider>
    </ThemeProvider>
  );
}

export default App;
