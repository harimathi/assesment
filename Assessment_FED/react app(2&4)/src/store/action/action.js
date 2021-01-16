import * as actionTypes from "./actionTypes";

export const setPosts = (postData) => {
  return {
    type: actionTypes.SET_POST,
    data: postData,
  };
};

export const setComments = (commentData) => {
  return {
    type: actionTypes.SET_COMMENTS,
    data: commentData,
  };
};
export const addPost = (text) => {
  return {
    type: actionTypes.ADD_POST,
    data: text,
  };
};

export const addComment = (text) => {
  return {
    type: actionTypes.ADD_COMMENTS,
    data: text,
  };
};

export const showError = (error) => {
  return {
    type: actionTypes.SHOW_ERROR,
    data: error,
  };
};
export const showSearch = (text) => {
  return {
    type: actionTypes.SHOW_SEARCH,
    data: text,
  };
};
