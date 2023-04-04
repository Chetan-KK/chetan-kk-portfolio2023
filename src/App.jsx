import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Components/Home/Home";
import MainProject from "./Components/MainProject/MainProject";
import "./App.css";
import MainLoading from "./Components/MainLoading/MainLoading";
import { ThemeProvider } from "./Context/ThemeContex";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <MainLoading />
        <AnimatePresence>
          <Routes>
            <Route path="/Chetan-KK/" element={<Home />} />
            <Route path="/Chetan-KK/:id/" element={<MainProject />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
