import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex w-full justify-center items-center">
      <main className="md:w-[1440px] w-screen ">
        <Navbar />
        <Home />
        <Footer />
      </main>
    </div>
  );
}

export default App;
