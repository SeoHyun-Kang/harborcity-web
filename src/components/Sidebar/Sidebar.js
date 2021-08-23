//사이드 바 메뉴 설정

import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo-white.svg";

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return ( //상단사이드 바(고래) && 하단 사이드 바(메뉴)
    <div className="sidebar" data-color={props.backgroundColor}>

      <div className="logo">
        <a
          href="/admin/dashboard"
          className="simple-text logo-mini"
          target="_top"
        >
          <div className="logo-img">
            <img  src="https://d29fhpw069ctt2.cloudfront.net/icon/image/48986/preview.svg" alt="react-logo" />
          </div>
        </a>
        <a
          href="/admin/dashboard"
          className="simple-text logo-normal"
          target="_top"
        >
          Harborcity
        </a>
      </div>

      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            if (prop.redirect) return null;
            return (
              <li
                className={
                  activeRoute(prop.layout + prop.path) +
                  (prop.pro ? " active active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={"now-ui-icons " + prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
      
    </div>
  );
}

export default Sidebar;
