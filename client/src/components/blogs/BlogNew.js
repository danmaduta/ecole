import React, { Component } from "react";
import { connect } from "react-redux";
import BlogForm from "./BlogForm";
import { createBlog } from "../../actions/blogs";

class BlogNew extends Component {
  onSubmit = formProps => {
    this.props.createBlog(formProps);
  };

  render() {
    return (
      <div className="ui container">
        <h3>Create a Blog</h3>
        <BlogForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createBlog }
)(BlogNew);
