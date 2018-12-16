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
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <Link to="/blogs" className="red btn-flat white-text">
          Finish
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
