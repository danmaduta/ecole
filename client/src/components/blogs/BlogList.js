import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { Text, Link, Card, Box, Heading } from "rebass";
import { fetchBlogs } from "../../actions/blogs";

class BlogList extends React.Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  renderAdmin(blog) {
    if (blog._user === this.props.currentUserId) {
      return (
        <React.Fragment>
          <Link
            to={`/blogs/edit/${blog._id}`}
            className="ui positive basic button"
          >
            Edit
          </Link>
          <Link
            to={`/blogs/delete/${blog._id}`}
            className="ui negative basic button"
          >
            Delete
          </Link>
        </React.Fragment>
      );
    }
  }

  renderBlogs = () => {
    return _.map(this.props.blogs, blog => {
      return (
        <div className="item" key={blog._id}>
          <div className="content">
            <p className="header">{blog.title}</p>

            <div className="description">{blog.content}</div>
          </div>
          <br />
          <Link to={`/blogs/${blog._id}`} className="ui primary basic button">
            Read
          </Link>
          {this.renderAdmin(blog)}
        </div>
      );
    });
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderBlogs()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    currentUserId: state.auth ? state.auth._id : null
  };
};

export default connect(
  mapStateToProps,
  { fetchBlogs }
)(BlogList);
