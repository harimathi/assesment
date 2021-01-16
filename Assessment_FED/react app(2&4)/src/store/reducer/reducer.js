import * as actionTypes from "../action/actionTypes";

const initialState = {
  posts: [],
  comments: [],
  searchPost: [],
  searchComments: [],
  error: false,
  search: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POST:
      return {
        ...state,
        posts: action.data,
      };
    case actionTypes.SET_COMMENTS:
      return {
        ...state,
        comments: action.data,
      };
    case actionTypes.ADD_POST:
      const updatedPost = [action.data, ...state.posts];
      return {
        ...state,
        posts: updatedPost,
      };
    case actionTypes.ADD_COMMENTS:
      const updatedComment = [action.data, ...state.comments];
      return {
        ...state,
        comments: updatedComment,
      };
    case actionTypes.SHOW_ERROR:
      return {
        ...state,
        error: true,
      };
    case actionTypes.SHOW_SEARCH:
      let comments;
      let post;
      if (action.data) {
        state.search = true;
        post = state.posts.filter(
          (val) =>
            val["title"].includes(action.data) ||
            val["body"].includes(action.data)
        );
        comments = state.comments.filter(
          (val) =>
            val["email"].includes(action.data) ||
            val["body"].includes(action.data) ||
            val["name"].includes(action.data)
        );
      } else {
        state.search = false;
        post = [];
        comments = [];
      }

      return {
        ...state,
        searchPost: post,
        searchComments: comments,
      };
    default:
      return state;
  }
};

export default reducer;
