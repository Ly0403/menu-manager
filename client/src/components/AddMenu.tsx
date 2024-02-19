import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import * as menuActions from "../redux/action/menu-actions";

class AddMenu extends Component<AddMenuProps, AddMenuStates> {
  constructor(props: AddMenuProps) {
    super(props);
    this.state = {
      menu: this.props.change??"",
    };
  }

  addMenu() {
    this.props.addMenu(this.state.menu);
    window.location.reload();
  }

  updateMenu() {
    this.props.updateMenu(this.props.currentMenu.id, this.state.menu);
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modalAddMenu"
          role="dialog"
          aria-labelledby="modalAddMenutitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {this.props.currentMenu.id ? "Update" : "Add New "} Menu
                </h5>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <input
                    value={this.state.menu} 
                    type="text"
                    className="form-control"
                    onChange={(e) => this.setState({ menu: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    this.props.currentMenu.id
                      ? this.updateMenu()
                      : this.addMenu()
                  }
                >
                  {this.props.currentMenu.id ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    currentMenu: state.currentMenuReducer,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addMenu: bindActionCreators(menuActions.addMenu, dispatch),
    getMenuList: bindActionCreators(menuActions.getMenus, dispatch),
    updateMenu: bindActionCreators(menuActions.updateMenu, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMenu);
