import { Component, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./pages/MenuItems";
import "./styles/NavbarStyle.css";
// class Navbar extends Component {
//   render() {

export default function Navbar() {
  const [State, setState] = useState(false);

  function handleClick() {
    setState({ clicked: !State.clicked });
  }
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Travels</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={State.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <u1 className={State.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <div>
          <button>Sign Up</button>
        </div>
      </u1>
    </nav>
  );
}
//   }
// }

// export default Navbar;
