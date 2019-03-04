import React, { Component } from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../history";
import { fetchBlog, deleteBlog } from "../../actions/blogs";

class BlogDelete extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteBlog(id)}
          className="ui animated fade button red"
        >
          <div className="visible content">Delete</div>
          <div className="hidden content">
            <i className="trash icon" />
          </div>
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.blog) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the blog with title ${
      this.props.blog.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Blog"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/blogs")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    blog: state.blogs[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchBlog, deleteBlog }
)(BlogDelete);
