import React, { Component, Fragment } from "react";
import Post from "./Post";
import axios from "axios";
import * as action from "../store/action";
import { connect } from "react-redux";
import Feeding from "./Feeding";

const postURL = "https://jsonplaceholder.typicode.com/posts";
const commentsURL = "https://jsonplaceholder.typicode.com/comments";

class Start extends Component {
  componentDidMount() {
    const postReq = axios.get(postURL);
    const commentsReq = axios.get(commentsURL);
    axios
      .all([postReq, commentsReq])
      .then((response) => {
        this.props.onSetPosts(response[0].data.slice(0, 100));
        this.props.onSetComments(response[1].data.slice(0, 100));
        // this.setState({ posts: response[0].data.slice(0, 4) });
        // this.setState({ comments: response[1].data.slice(0, 4) });
      })
      .catch((error) => {
        this.props.onShowError();
      });
  }

  render() {
    let post =
      this.props.searchPost.length || this.props.searchComments.length ? (
        <Post
          post={this.props.searchPost}
          comment={this.props.searchComments}
        />
      ) : (
        <Post post={this.props.posts} comment={this.props.comments} />
      );

    if (this.props.error) {
      post = (
        <p style={{ textAlign: "center" }}>Somthing Went Wrong on URL/SERVER</p>
      );
    }
    return (
      <Fragment>
        <div className="blogContainer">
          {post}
          <Feeding />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
    error: state.error,
    searchPost: state.searchPost,
    searchComments: state.searchComments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetPosts: (data) => dispatch(action.setPosts(data)),
    onSetComments: (data) => dispatch(action.setComments(data)),
    onShowError: () => dispatch(action.showError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
