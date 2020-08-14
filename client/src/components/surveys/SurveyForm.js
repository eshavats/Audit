import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import _ from "lodash";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends React.Component {
  renderFields() {
    return _.map(formFields, ({ name, label }) => {
      return (
        <Field
          key={name}
          type="text"
          component={SurveyField}
          name={name}
          label={label}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to="/surveys" className="red btn left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn right white-text">
            Next
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide the ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
