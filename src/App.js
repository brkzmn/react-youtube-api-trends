import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { SearchBarProvider } from "./contexts/SearchBarContext";
import { TrendingVideosProvider } from "./contexts/TrendingVideosContext";

function App() {
  return (
    <SearchBarProvider>
      <TrendingVideosProvider>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </div>
      </TrendingVideosProvider>
    </SearchBarProvider>
  );
}

export default App;
