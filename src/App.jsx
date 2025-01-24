import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstMeeting from "./pages/FirstMeeting";
import Proposal from "./pages/Proposal";
import RSVP from "./pages/RSVP";
import Playlist from "./pages/Playlist";
import Messages from "./pages/Messages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first-meeting" element={<FirstMeeting />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
