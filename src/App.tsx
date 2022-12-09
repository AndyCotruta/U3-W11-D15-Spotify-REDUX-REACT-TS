import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LeftNav from "./components/LeftNav";
import MusicPlayer from "./components/MusicPlayer";
import Search from "./components/Search";
import YourLibrary from "./components/YourLibrary";
import CreatePlaylist from "./components/CreatePlaylist";
import LikedSongs from "./components/likedSongs";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
          <LeftNav />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/yourlibrary" element={<YourLibrary />} />
          <Route path="/createplaylist" element={<CreatePlaylist />} />
          <Route path="/likedsongs" element={<LikedSongs />} />
          <MusicPlayer />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
