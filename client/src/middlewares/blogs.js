import {
  GET_BLOGS,
  GET_BLOG,
  fetchBlogs,
  fetchBlog,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOG_SUCCESS,
  submitBlog,
  updateBlogs,
  getBlogs,
  SUBMITB
} from "../actions/blogs";

// this middleware only care about the getPosts action
export const getBlogsFlow = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === GET_BLOGS) {
    dispatch(fetchBlogs());
    //dispatch(showSpinner());
  }
};

export const getBlogFlow = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === GET_BLOG) {
    dispatch(fetchBlog());
    //dispatch(showSpinner());
  }
};

// on successful fetch, process the posts data
export const processBlogsCollection = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === FETCH_BLOGS_SUCCESS) {
    dispatch(updateBlogs(action.payload));
    // dispatch(hideSpinner())
  }
};

export const processBlogCollection = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === FETCH_BLOG_SUCCESS) {
    dispatch(updateBlogs(action.payload));
    // dispatch(hideSpinner())
  }
};

// notify about an order in progress, dispatch an order event
export const submitBlogFlow = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === SUBMITB) {
    dispatch(submitBlog(action.payload));
    dispatch(getBlogs());
  }
};

export const blogsMidl = [
  getBlogsFlow,
  getBlogFlow,
  processBlogsCollection,
  processBlogCollection,
  submitBlogFlow
];
