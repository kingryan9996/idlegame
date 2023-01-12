import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dungeon from "./component/Dungeon";
import Village from "./component/Village";
import Mine from "./component/Mine";
import River from "./component/River";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Village />} />
          <Route path="/Dungeon" element={<Dungeon />} />
          <Route path="/Mine" element={<Mine />} />
          <Route path="/River" element={<River />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
