import "./App.css";
import Banner from "./components/Banner";
import Discovers from "./components/Discovers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="border-b-2 mb-24">
          <Navbar></Navbar>
        </div>
        <Banner></Banner>
        <Discovers></Discovers>
      </div>
      <Reviews></Reviews>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
