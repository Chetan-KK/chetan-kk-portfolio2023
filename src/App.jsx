import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Components/Home/Home";
import MainProject from "./Components/MainProject/MainProject";
import "./App.css";
import MainLoading from "./Components/MainLoading/MainLoading";

function App() {
  return (
    <div className="App">
      <MainLoading />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/" element={<MainProject />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
