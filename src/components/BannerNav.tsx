import { useLocation } from "react-router-dom";

const BannerNav = () => {
  const location = useLocation();

  return (
    <div className="p-3 bannerNav text-white d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <div> Buttons</div>
        <input
          className={location.pathname === "/search" ? "input" : "hidden"}
          type="text"
          placeholder="What do you want to listen to?"
        />
      </div>
      <div>Profile</div>
    </div>
  );
};

export default BannerNav;
