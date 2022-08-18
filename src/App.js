import { Routes, Route } from "react-router-dom";
import ComplaintsPage from "./pages/complaints";
import AddNewComplaint from "./pages/addComplaint";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<ComplaintsPage />} />/
        <Route path="/add" element={<AddNewComplaint />} />/
      </Routes>
    </>
  );
}

export default App;
