import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import LeftNav from "./components/LeftNav";
import MusicPlayer from "./components/MusicPlayer";
import Search from "./components/Search";
import YourLibrary from "./components/YourLibrary";
import CreatePlaylist from "./components/CreatePlaylist";
import LikedSongs from "./components/LikedSongs";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="d-flex">
          <LeftNav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/yourlibrary" element={<YourLibrary />} />
            <Route path="/createplaylist" element={<CreatePlaylist />} />
            <Route path="/likedsongs" element={<LikedSongs />} />
          </Routes>
        </div>

        <MusicPlayer />
      </div>
    </BrowserRouter>
  );
}

export default App;
