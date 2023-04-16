import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Components/Home/Home";
import MainProject from "./Components/MainProject/MainProject";
import "./App.css";
import MainLoading from "./Components/MainLoading/MainLoading";
import { ThemeProvider } from "./Context/ThemeContex";
import Resume from "./Components/Resume/Resume";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <MainLoading />
        <ScrollToTop />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id/" element={<MainProject />} />
            <Route path="/resume/" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
