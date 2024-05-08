import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Wrapper from "./components/Wrapper";
import ToDo from "./features/To-do";
import Schedule from "./features/Schedule";

const App = () => {
  return (
    <Routes>
      <Route element={<Wrapper />}>
      <Route path="/" element={<About />}></Route>
        <Route path="/to-do" element={<ToDo />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
