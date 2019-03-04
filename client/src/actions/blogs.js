import axios from "axios";
import history from "../history";
import {
  CREATE_BLOG,
  FETCH_BLOG,
  FETCH_BLOGS,
  DELETE_BLOG,
  EDIT_BLOG
} from "./types";

export const createBlog = values => async dispatch => {
  const res = await axios.post("/api/blogs", values);

  dispatch({ type: CREATE_BLOG, payload: res.data });
  history.push("/blogs");
};

export const fetchBlogs = () => async dispatch => {
  const res = await axios.get("/api/blogs");

  dispatch({ type: FETCH_BLOGS, payload: res.data });
};

export const fetchBlog = id => async dispatch => {
  const res = await axios.get(`/api/blogs/${id}`);

  dispatch({ type: FETCH_BLOG, payload: res.data });
};

export const deleteBlog = id => async dispatch => {
  await axios.delete(`/api/blogs/delete/${id}`);
  dispatch({ type: DELETE_BLOG, payload: id });
  history.push("/blogs");
};

export const editBlog = (id, values) => async dispatch => {
  const response = await axios.patch(`/api/blogs/edit/${id}`, values);

  dispatch({ type: EDIT_BLOG, payload: response.data });
  history.push("/blogs");
};
