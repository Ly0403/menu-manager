import React, { Component } from "react";
import { connect } from "react-redux";
import AddMenu from "./AddMenu";
import { bindActionCreators, Dispatch } from "redux";
import * as menuActions from "../redux/action/menu-actions";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

class Admin extends Component<AdminProps, AdminStates> {
  state = {
    change: "a",
  };
  deleteMenu(id: string) {
    this.props.deleteMenu(id);
    window.location.reload();
  }

  updateCurrentMenu(id: string) {
    this.setState({change:"b"});
    this.props.setCurrentMenu(id);
  }

  resetCurrentMenu() {
    this.props.setCurrentMenu(null);
  }

  render() {
    return (
      <div className="container" style={{ margin: 100, width: "40%" }}>
        <h1>Admin Panel</h1>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Menu Name</th>
              <th></th>
              <th>
                <button
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAddMenu"
                  onClick={() => this.resetCurrentMenu()}
                >
                  <AddIcon />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.menus.map((v) => (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>
                  <button
                    onClick={() => this.updateCurrentMenu(v.id)}
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modalAddMenu"
                  >
                    <EditIcon />
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteMenu(v.id)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddMenu change={this.state.change}></AddMenu>
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
    deleteMenu: bindActionCreators(menuActions.deleteMenu, dispatch),
    getMenuList: bindActionCreators(menuActions.getMenus, dispatch),
    setCurrentMenu: bindActionCreators(menuActions.setCurrentMenu, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
