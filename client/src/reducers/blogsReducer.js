import _ from "lodash";
import {
  FETCH_BLOGS,
  FETCH_BLOG,
  CREATE_BLOG,
  EDIT_BLOG,
  DELETE_BLOG
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BLOG:
    case CREATE_BLOG:
    case EDIT_BLOG:
      return { ...state, [action.payload._id]: action.payload };
    case FETCH_BLOGS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case DELETE_BLOG:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
