import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/projects";
import Footer from "./components/Footer";
import Contact from "./components/contact";
// import Preloader from "./components/PreLoader";

export default function App() {
  return (
    <>
      {/* <Preloader /> */}
      <div>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
