import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleIncrease, handleDecrease, handleReset } from "../actions";

class Buttons extends Component {
  render() {
    const { handleIncrease, handleDecrease, handleReset } = this.props;
    return (
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success" onClick={handleDecrease}>
            Decrease
          </Button>
          <Button variant="warning" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="danger" onClick={handleIncrease}>
            Increase
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      handleIncrease,
      handleDecrease,
      handleReset
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Buttons);
