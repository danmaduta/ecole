import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlog } from "../../actions/blogs";

class BlogShow extends React.Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.id);
  }

  render() {
    if (!this.props.blog) {
      return "";
    }

    const { title, content } = this.props.blog;

    return (
      <div className="ui container">
        <h2>{title}</h2>
        <p>{content}</p>
        <Link to="/blogs" className="ui primary basic button">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ blogs }, ownProps) {
  return { blog: blogs[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchBlog }
)(BlogShow);
