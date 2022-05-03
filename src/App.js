import Admin from "./pages/Admin";
import Allhotels from "./pages/Allhotels";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/nav/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/allhotels"} element={<Allhotels />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/:id"} element={<Detail />} />
          <Route path={"/admin"} element={<Admin />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;