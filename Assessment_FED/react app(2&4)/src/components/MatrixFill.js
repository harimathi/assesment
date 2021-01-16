import React, { Component, Fragment } from "react";

class Comments extends Component {
  state = {
    inputArr: [8, 17, 35, 13, 25],
  };

  onClickHandler = (event) => {
    let inputString = event.target.previousElementSibling.value;
    let arrayVal = inputString.split(",");
    let finalArray = arrayVal.filter((val) => val && val > -1);
    this.setState({ inputArr: finalArray });
  };

  render() {
    let originalArr = this.state.inputArr;
    let arrCopy = [...originalArr];
    let elCount = Math.round(arrCopy.length / 2);
    let sortedArr = arrCopy.sort((a, b) => a - b);
    let flexEl = sortedArr.map((val, i) => {
      return {
        id: val,
        el: (
          <div
            style={{
              flex: i + 1,
              background: `#${Math.random().toString(16).substr(2, 6)}`,
              textAlign: "center",
            }}
          >
            {val}
          </div>
        ),
      };
    });
    let upperRowEl = [];
    let lowerRowEl = [];
    originalArr.map((val, i) => {
      if (i < elCount) {
        flexEl.filter((value) => {
          if (val == value.id) {
            upperRowEl.push(value.el);
          }
        });
      } else {
        flexEl.filter((value) => {
          if (val == value.id) {
            lowerRowEl.push(value.el);
          }
        });
      }
    });

    let colorGrid = this.state.inputArr.length ? (
      <div className="gridContainer">
        <div className="row">{upperRowEl}</div>
        <div className="row">{lowerRowEl}</div>
      </div>
    ) : (
      <h2>Please give Array values</h2>
    );

    return (
      <Fragment>
        {colorGrid}
        <div className="numberField">
          <input placeholder="use , to separate value"></input>
          <button onClick={this.onClickHandler}>change</button>
        </div>
      </Fragment>
    );
  }
}

export default Comments;
