import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import BlogField from "./BlogField";
import formFields from "./formFields";

class BlogForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={BlogField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  onSubmit = formProps => {
    this.props.onSubmit(formProps);
  };

  render() {
    // const { handleSubmit } = this.props;
    return (
      <div className="ui container">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          {this.renderFields()}
          <Link to="/blogs" className="ui negative basic button">
            Cancel
          </Link>
          <button type="submit" className="ui primary basic button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "blogForm"
})(BlogForm);
