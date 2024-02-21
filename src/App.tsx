import { Route, Routes } from "react-router-dom";
import { Home } from "./conteiner/home";
import { GetCode } from "./conteiner/getCode";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/token/" element={<GetCode />} />
      </Routes>
    </>
  );
}

export default App;
