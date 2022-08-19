import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Header from "./page/Layout/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
