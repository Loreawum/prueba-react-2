import { NavLink } from "react-router-dom";

const CustomLink = ({ to, text, icon }) => {
  return (
    <NavLink to={to} className="nav-link">
      <div className="d-flex align-items-center">
        <h2 className="deco me-5 fs-4 text">{text}</h2>
      </div>
    </NavLink>
  );
};

export default CustomLink;
