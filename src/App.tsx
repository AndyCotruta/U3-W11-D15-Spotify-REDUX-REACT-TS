import React, { useState } from "react";
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
import AlbumMain from "./components/AlbumMain";
import BannerNav from "./components/BannerNav";
import { Helmet } from "react-helmet";

function App() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spotify Clone</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Spotify Clone" />
      </Helmet>
      <div className="body">
        <div className="d-flex">
          <LeftNav
            showMobileNav={showMobileNav}
            setShowMobileNav={setShowMobileNav}
          />
          <div className="center-section">
            <BannerNav
              showMobileNav={showMobileNav}
              setShowMobileNav={setShowMobileNav}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/album/:id" element={<AlbumMain />} />
              <Route path="/yourlibrary" element={<YourLibrary />} />
              <Route path="/createplaylist" element={<CreatePlaylist />} />
              <Route path="/likedsongs" element={<LikedSongs />} />
            </Routes>
          </div>
        </div>

        <MusicPlayer />
      </div>
    </BrowserRouter>
  );
}

export default App;
