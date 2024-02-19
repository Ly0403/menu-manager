import { connect } from "react-redux";
import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import * as menuActions from "../redux/action/menu-actions";

class Header extends Component<HeaderProps, HeaderState> {
  componentDidMount(): void {
    if (this.props.menus.length === 0) {
      this.props.getMenuList();
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="/assets/img/98191391.png"
                alt="menu manager"
                width={50}
              ></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-warning"
              id="offcanvasDarkNavbar"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Menu Manager
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/admin">
                      Admin
                    </a>
                  </li>
                  {this.props.menus.map((v) => (
                    <li key={v.id} className="nav-item">
                      <a className="nav-link" aria-current="page" href="/# ">
                        {v.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    menus: state.getMenusReducer,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getMenuList: bindActionCreators(menuActions.getMenus, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
