import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

//top of page user navigation
export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false); // set navbar to close when navigating to new location
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => {
          setExpandNavbar((prev) => !prev) // change state to open or close based off prev state value
        }}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/experience"}>Experience</Link>
      </div>
    </div>
  )
}
