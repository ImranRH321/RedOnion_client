import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Header from "./page/Layout/Header";
import Breakfast from "./page/Foods/Breakfast";
import Lunch from "./page/Foods/Lunch";
import Dinner from "./page/Foods/Dinner";
import BreakfastDetail from "./page/Foods/BreakfastDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/details/:id" element={<BreakfastDetail />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
      </Routes>
    </div>
  );
}

export default App;
