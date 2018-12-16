import axios from "axios";

export const GET_BLOGS = "[blogs] GET";
export const GET_BLOG = "[blog] GET";
export const FETCH_BLOGS = "[blogs] Fetch blogs";
export const FETCH_BLOGS_SUCCESS = "[blogs] Fetch success";
export const FETCH_BLOGS_ERROR = "[blogs] Fetch error";
export const FETCH_BLOG = "[blog] Fetch blog";
export const FETCH_BLOG_SUCCESS = "[blog] Fetch success";
export const FETCH_BLOG_ERROR = "[blog] Fetch error";
export const UPDATE_BLOGS = "[blogs] Update";
export const SUBMITB = "[blog] Submit blog";
export const SUBMIT_BLOG = "[blogs] Submit blog";
export const SELECT_BLOG = "[blogs] Select";

export const getBlogs = () => ({
  type: GET_BLOGS
});

export const updateBlogs = data => ({
  type: UPDATE_BLOGS,
  payload: data
});

export const submitB = values => ({
  type: SUBMITB,
  payload: values
});

export const submitBlog = values => async dispatch => {
  const res = await axios.post("/api/blogs", values);

  dispatch({ type: SUBMIT_BLOG, payload: res.data });
};

export const fetchBlogs = () => async dispatch => {
  const res = await axios.get("/api/blogs");

  dispatch({ type: FETCH_BLOGS, payload: res.data });
};

export const fetchBlog = id => async dispatch => {
  const res = await axios.get(`/api/blogs/${id}`);

  dispatch({ type: FETCH_BLOG, payload: res.data });
};
