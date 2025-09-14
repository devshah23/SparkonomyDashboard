import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#E5CBE4] to-[#E6CDEA]">
        <Navbar />
        <Dashboard />
        <Footer />
      </div>
    </>
  );
}

export default App;
