import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/todo" element={<TodoList />}></Route>
      </Routes>
    </div>
  );
}

export default App;

