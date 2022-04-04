import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="reviews" element={<Reviews />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
