import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
