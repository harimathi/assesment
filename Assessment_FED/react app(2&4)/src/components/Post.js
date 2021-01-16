import React, { Component, Fragment } from "react";
import ListCard from "./ListCard";

class Post extends Component {
  render() {
    let post;
    if (this.props) {
      this.liKey++;
      post = this.props.post.length
        ? this.props.post.map((post) => {
            return (
              <li>
                <div className="Post">
                  <div className="Card">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                  </div>
                </div>
                {this.props.comment.length
                  ? this.props.comment.map((comment) => {
                      if (comment.postId === post.id) {
                        return (
                          <div className="Comment">
                            <div className="Card">
                              <div>
                                <p>{comment.email}</p>
                                <h3>{comment.name}</h3>
                              </div>
                              <p>{comment.body}</p>
                            </div>
                          </div>
                        );
                      }
                    })
                  : null}
              </li>
            );
          })
        : this.props.comment.length
        ? this.props.comment.map((comment) => {
            // if (comment.postId == post.id) {
            return (
              <div className="Comment">
                <div className="Card">
                  <div>
                    <p>{comment.email}</p>
                    <h3>{comment.name}</h3>
                  </div>
                  <p>{comment.body}</p>
                </div>
              </div>
            );
            // }
          })
        : null;
    }
    return (
      <Fragment>
        <div className="ListContainer">
          <ListCard list={post} />
          {/* {post} */}
        </div>
      </Fragment>
    );
  }
}

export default Post;
