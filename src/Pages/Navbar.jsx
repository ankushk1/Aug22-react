import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ name, age }) => {
  return (
    <div className="mb-5">
      <ul>
        <li className="my-2">
          <NavLink
          
            // className={({ isActive }) => {
            //   return isActive
            //     ? "text-light btn btn-secondary btn-sm my-2"
            //     : "text-danger btn btn-outline-secondary btn-sm my-2";
            // }}
            // className="my-2"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "green",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px"
                  }
                : {
                    backgroundColor: "cyan",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px"
                  }
            }
            to="/"
          >
            {({isActive}) => isActive ? "Active Home" :  "Home"}
          </NavLink>
        </li>
        <li className="my-2">
          <NavLink
            // className={({ isActive }) => {
            //   return isActive
            //     ? "text-light btn btn-secondary btn-sm my-2"
            //     : "text-danger btn btn-outline-secondary btn-sm my-2";
            // }}
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "green",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px"
                  }
                : {
                    backgroundColor: "cyan",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px"
                  }
            }
            to="/about"
            state={{ some: "value" }}
          >
            About
          </NavLink>
        </li>
        <li className="my-2">
          <NavLink
            // className={({ isActive }) => {
            //   return isActive
            //     ? "text-light btn btn-secondary btn-sm my-2"
            //     : "text-danger btn btn-outline-secondary btn-sm my-2";
            // }}
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "green",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px"
                  }
                : {
                    backgroundColor: "cyan",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px"
                  }
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
