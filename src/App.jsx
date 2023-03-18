import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Components/Home/Home";
import MainProject from "./Components/MainProject/MainProject";
import "./App.css";
import MainLoading from "./Components/MainLoading/MainLoading";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLoading />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:id" element={<MainProject />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
