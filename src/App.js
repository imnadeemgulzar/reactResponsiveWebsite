import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Menu from "./components/menu";
import Error from "./components/error";
const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};
export default App;
