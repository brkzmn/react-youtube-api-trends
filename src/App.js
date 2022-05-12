import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { SearchBarProvider } from "./contexts/SearchBarContext";
import { TrendingVideosProvider } from "./contexts/TrendingVideosContext";
import TrendVideosPage from "./pages/TrendVideosPage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchBarProvider>
        <TrendingVideosProvider>
          <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trends" element={<TrendVideosPage />} />
              </Routes>
            </Router>
          </div>
        </TrendingVideosProvider>
      </SearchBarProvider>
    </ThemeProvider>
  );
}

export default App;
