import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

export class Display extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        <Card>
          <Card.Body> Current Count: {count}</Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(
  mapStateToProps,
  null
)(Display);
