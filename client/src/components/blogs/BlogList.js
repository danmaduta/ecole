import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../actions/blogs";

class BlogList extends React.Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  renderBlogs = () => {
    return _.map(this.props.blogs, blog => {
      return (
        <div className="card darken- horizontal" key={blog._id}>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{blog.title}</span>
              <p>{blog.content}</p>
            </div>
            <div className="card-action">
              <Link to={`/blogs/${blog._id}`}>Read</Link>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props.blogs);
    return <div>{this.renderBlogs()}</div>;
  }
}

function mapStateToProps({ blogs }) {
  return { blogs };
}

export default connect(
  mapStateToProps,
  { fetchBlogs }
)(BlogList);
