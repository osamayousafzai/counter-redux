// import packages
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import actions

class Container extends Component {
  render() {
    return (
      <div>
        <h4>Container (container.js)</h4>
      </div>
    );
  }
}

// functions mapStateToProps & mapDispatchToProps
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ null: null }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)({ Container });
