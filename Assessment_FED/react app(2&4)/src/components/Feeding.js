import React, { Component } from "react";
import * as action from "../store/action";
import { connect } from "react-redux";

class Feeding extends Component {
  postAreahandler = (event) => {
    const textVal = event.target.previousElementSibling.value;

    if (!textVal) {
      return;
    }
    const data = {
      id: this.props.posts.length + 1,
      title: textVal,
      body: textVal,
    };
    this.props.onAddPost(data);
  };

  commentAreahandler = (event) => {
    const textVal = event.target.previousElementSibling.value;

    if (!textVal) {
      return;
    }
    const data = {
      postId: this.props.comments.length + 1,
      name: textVal,
      email: textVal,
      body: textVal,
    };
    this.props.onAddcomment(data);
  };

  serachAreaHandler = (event) => {
    let searchText = event.target.value;
    this.props.onSearch(searchText);
  };

  render() {
    return (
      <div className="Input">
        <div className="Field">
          <textarea
            autoFocus
            id="searchArea"
            placeholder=" type to search..."
            onChange={this.serachAreaHandler}
          ></textarea>
        </div>
        <div className="Field">
          <textarea id="postArea"></textarea>
          <button onClick={this.postAreahandler}>Post...</button>
        </div>
        <div className="Field">
          <textarea id="commentArea"></textarea>
          <button onClick={this.commentAreahandler}>Comment</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
    error: state.error,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (text) => dispatch(action.addPost(text)),
    onAddcomment: (text) => dispatch(action.addComment(text)),
    onSearch: (text) => dispatch(action.showSearch(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feeding);
