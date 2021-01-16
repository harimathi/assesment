import React, { Component, Fragment } from "react";

class ListCard extends Component {
  render() {
    return (
      <Fragment>
        <div className="ListCard">
          <ul>{this.props.list}</ul>
        </div>
      </Fragment>
    );
  }
}

export default ListCard;
